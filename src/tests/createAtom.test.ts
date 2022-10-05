import { createAtom, getAtomValue, setAtomValue } from "../core";

test("createAtom is a function", () => {
  expect(createAtom).toBeInstanceOf(Function);
});

test("Atom's value is equal to the initial one", () => {
  const initialValue = 0;
  const countAtom = createAtom(initialValue);

  const value = getAtomValue(countAtom);

  expect(value).toBe(initialValue);
});

test("Changed atom's value is not equal to the initial one", () => {
  const initialValue = 0;
  const nextValue = 1;
  const countAtom = createAtom(initialValue);

  setAtomValue(countAtom, nextValue);

  const value = getAtomValue(countAtom);

  expect(value).not.toBe(initialValue);
});

test("Changed atom's value is equal to the next value", () => {
  const initialValue = 0;
  const nextValue = 1;
  const countAtom = createAtom(initialValue);

  setAtomValue(countAtom, nextValue);

  const value = getAtomValue(countAtom);

  expect(value).toBe(nextValue);
});
