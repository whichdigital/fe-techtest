import { createNumberArray, numberArray } from "../src/numberArray"

describe("createNumberArray", () => {
  let testArray = createNumberArray(1,10)
  it("returns an Array", () => {
    expect(Array.isArray(testArray)).toBeTruthy()
  })
  it("returns only Integers", () => {
    expect(testArray.filter(num => Number.isInteger(num))).toEqual(testArray)
  })
  it("gives us back the min and max arguments in the correct position", () => {
    expect(testArray[0]).toBe(1)
    expect(testArray[testArray.length-1]).toBe(10)
  })
})