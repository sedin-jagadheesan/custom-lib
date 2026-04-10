import { lens, view, set } from "../src/lens";

describe("lens", () => {

  const user = {
    id: 1,
    profile: {
      settings: {
        theme: "light"
      }
    }
  };

  test("should view deep value", () => {
    const themeLens = lens("profile.settings.theme");
    const result = view(themeLens, user);

    expect(result).toBe("light");
  });

  test("should update value immutably", () => {
    const themeLens = lens("profile.settings.theme");

    const updatedUser = set(themeLens, "dark", user);

    expect(updatedUser.profile.settings.theme).toBe("dark");
  });

  test("should not mutate original object", () => {
    const themeLens = lens("profile.settings.theme");

    const updatedUser = set(themeLens, "dark", user);

    expect(user.profile.settings.theme).toBe("light"); // original unchanged
    expect(updatedUser.profile.settings.theme).toBe("dark");
  });

  test("should handle missing path", () => {
    const newLens = lens("profile.newField.value");

    const updatedUser = set(newLens, "test", user);

    expect(updatedUser.profile.newField.value).toBe("test");
  });

});