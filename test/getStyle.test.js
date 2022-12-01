import { getStyle } from "../src/app/features/multiples/util/helper";

describe("getStyle", () => {
  it("returns selected when number is equal to selectedNumber", () => {
    expect(getStyle(5, 5)).toBe("selected");
  });

  it("returns highlighted when number is divisible by selectedNumber", () => {
    expect(getStyle(10, 5)).toBe("highlighted");
  });

  it("returns empty string when number is not divisible by selectedNumber", () => {
    expect(getStyle(11, 5)).toBe(" ");
  });
});
