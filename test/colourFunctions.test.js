import { isMultiple, setDivColour, setAllDivColours, selectedNumber, setSelectedNumber, handleClick } from "../src/colourFunctions"

describe.only("setSelectedNumber", () => {
  it("adds a number to our selectedNumber array", () => {
    setSelectedNumber(10)
    expect(selectedNumber.includes(10)).toBeTruthy()
  })
  it("adds a second number to our selectedNumber array", () => {
    setSelectedNumber(20)
    expect(selectedNumber.includes(20)).toBeTruthy()
  })
})