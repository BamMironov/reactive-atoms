import { Subscription, Atom } from "./types";
import { READ_ATOM, WRITE_ATOM, SUBSCRIBE_ATOM } from "./constants";

export default function createAtom<T>(initialValue: T) {
  let value = initialValue;

  const subscriptions = new Set<Subscription<T>>();

  function notify(newValue: T, oldValue: T) {
    subscriptions.forEach((subscription) => subscription(newValue, oldValue));
  }

  return {
    [READ_ATOM]: () => value,
    [WRITE_ATOM]: (newValue: T) => {
      if (newValue !== value) {
        const prevValue = value;

        value = newValue;

        notify(value, prevValue);
      }
    },
    [SUBSCRIBE_ATOM]: (callback: Subscription<T>) => {
      subscriptions.add(callback);

      return () => {
        subscriptions.delete(callback);
      };
    },
  };
}
