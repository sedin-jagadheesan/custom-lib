import { find } from "../src/find";

describe("find()", () => {

  const users = [
    { id: 1, name: "Vishnu" },
    { id: 2, name: "Ram" }
  ];

  test("find by predicate", () => {
    const result = find(users, (u: any) => u.id === 1);

    expect(result).toEqual({ id: 1, name: "Vishnu" });
  });

  test("find by key-value", () => {
    const result = find(users, "name", "Ram");

    expect(result).toEqual({ id: 2, name: "Ram" });
  });

  test("returns undefined if not found", () => {
    const result = find(users, "name", "Unknown");

    expect(result).toBeUndefined();
  });

  test("handles empty array", () => {
    expect(find([], "id", 1)).toBeUndefined();
  });

  test("does not mutate original array", () => {
    const copy = JSON.parse(JSON.stringify(users));

    find(users, "id", 1);

    expect(users).toEqual(copy);
  });

});