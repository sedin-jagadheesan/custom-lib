import { some } from "../src/some";

describe("some", () => {

  test("should return true if any element matches", () => {
    const arr = [1, 2, 3];
    const result = some(x => x > 2, arr);

    expect(result).toBe(true);
  });

  test("should return false if no element matches", () => {
    const arr = [1, 2, 3];
    const result = some(x => x > 5, arr);

    expect(result).toBe(false);
  });

  test("should handle empty array", () => {
    const result = some(x => x > 1, []);
    expect(result).toBe(false);
  });

});