import { reduce } from "../src/reduce";

describe("reduce", () => {

  test("should sum values", () => {
    const arr = [1, 2, 3];
    const result = reduce((acc, val) => acc + val, 0, arr);

    expect(result).toBe(6);
  });

  test("should multiply values", () => {
    const arr = [1, 2, 3, 4];
    const result = reduce((acc, val) => acc * val, 1, arr);

    expect(result).toBe(24);
  });

  test("should handle empty array", () => {
    const result = reduce((acc, val) => acc + val, 10, []);
    expect(result).toBe(10);
  });

});