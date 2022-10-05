import { READ_ATOM, WRITE_ATOM, SUBSCRIBE_ATOM } from "./constants";
import { Atom, Subscription } from "./types";

export function getAtomValue<T>(atom: Atom<T>) {
  return atom[READ_ATOM]();
}

export function setAtomValue<T>(atom: Atom<T>, newValue: T) {
  return atom[WRITE_ATOM](newValue);
}

export function subscribe<T>(atom: Atom<T>, callback: Subscription<T>) {
  return atom[SUBSCRIBE_ATOM](callback);
}
