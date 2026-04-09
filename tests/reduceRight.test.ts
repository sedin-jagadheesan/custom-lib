import { reduceRight } from "../src/reduceRight";

describe("reduceRight", () => {

  test("should process from right to left", () => {
    const arr = [10, 5];
    const result = reduceRight((acc, val) => acc - val, 100, arr);

    expect(result).toBe(85);
  });

  test("should handle empty array", () => {
    const result = reduceRight((acc, val) => acc + val, 10, []);
    expect(result).toBe(10);
  });

  test("should not mutate original array", () => {
    const arr = [1, 2, 3];
    reduceRight((acc, val) => acc + val, 0, arr);

    expect(arr).toEqual([1, 2, 3]);
  });

});