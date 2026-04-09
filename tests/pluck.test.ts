import { pluck } from "../src/pluck";

describe("pluck", () => {

  const data = [
    { id: 1, info: { email: "a@test.com" }, tags: ["dev"] },
    { id: 2, info: { email: "b@test.com" }, tags: ["hr"] }
  ];

  test("should pluck simple property", () => {
    const result = pluck("id", data);
    expect(result).toEqual([1, 2]);
  });

  test("should pluck deep property", () => {
    const result = pluck("info.email", data);
    expect(result).toEqual(["a@test.com", "b@test.com"]);
  });

  test("should pluck multiple keys", () => {
    const result = pluck(["id", "tags"], data);

    expect(result).toEqual([
      { id: 1, tags: ["dev"] },
      { id: 2, tags: ["hr"] }
    ]);
  });

  test("should handle empty array", () => {
    const result = pluck("id", []);
    expect(result).toEqual([]);
  });

  test("should not mutate original data", () => {
    const original = [...data];

    pluck("id", data);

    expect(data).toEqual(original);
  });

});