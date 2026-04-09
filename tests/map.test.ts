import { map } from "../src/map";

describe("map", () => {

  test("should transform values", () => {
    const arr = [1, 2, 3];
    const result = map(x => x * 2, arr);

    expect(result).toEqual([2, 4, 6]);
  });

  test("should not mutate original array", () => {
    const arr = [1, 2, 3];
    map(x => x * 2, arr);

    expect(arr).toEqual([1, 2, 3]);
  });

  test("should handle empty array", () => {
    const result = map(x => x * 2, []);
    expect(result).toEqual([]);
  });

});