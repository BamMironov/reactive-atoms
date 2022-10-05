import { READ_ATOM, WRITE_ATOM, SUBSCRIBE_ATOM } from "./constants";

export type Subscription<T> = (newValue: T, oldValue: T) => unknown;

export type Atom<T> = {
  [READ_ATOM]: () => T;
  [WRITE_ATOM]: (v: T) => unknown;
  [SUBSCRIBE_ATOM]: (callback: Subscription<T>) => () => void;
};
