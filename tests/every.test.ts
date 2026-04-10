import { every } from "../src/every";

describe("every()", () => {

  test("returns true if all match", () => {
    expect(every(x => x > 0, [1, 2, 3])).toBe(true);
  });

  test("returns false if one fails", () => {
    expect(every(x => x > 2, [1, 2, 3])).toBe(false);
  });

  test("empty array returns true", () => {
    expect(every(x => x > 0, [])).toBe(true);
  });

  test("does not mutate original array", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];

    every(x => x > 1, arr);

    expect(arr).toEqual(copy);
  });

});