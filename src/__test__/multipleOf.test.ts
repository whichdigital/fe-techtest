import { getMultiplesOf, isMultipleOf } from "../multiplesOf";

describe("multipleOf", () => {
  it("should return multiples of a number", () => {
    expect(getMultiplesOf(0)).toEqual([]);
    expect(getMultiplesOf(1)).toEqual([1]);
    expect(getMultiplesOf(2)).toEqual([1, 2]);
    expect(getMultiplesOf(7)).toEqual([1, 7]);
    expect(getMultiplesOf(10)).toEqual([1, 2, 5, 10]);
    expect(getMultiplesOf(101)).toEqual([1, 101]);
  });
});

describe("isMultipleOf", () => {
  it("should return true if a number is a multiple of another number", () => {
    expect(isMultipleOf(12, 3)).toBe(true);
    expect(isMultipleOf(8, 4)).toBe(true);
    expect(isMultipleOf(10, 10)).toBe(true);
  });

  it("should return false if a number is a multiple of another number", () => {
    expect(isMultipleOf(12, 5)).toBe(false);
    expect(isMultipleOf(5, 2)).toBe(false);
    expect(isMultipleOf(3, 2)).toBe(false);
    expect(isMultipleOf(0, 0)).toBe(false);
  });
});
