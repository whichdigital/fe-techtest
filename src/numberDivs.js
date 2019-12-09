import { numberArray } from "./numberArray"

export const createNumberDiv = number => {
  let div = document.createElement("div")
  div.innerText = number
  return div
}

export const createAllNumberDivs = array => array.map(createNumberDiv)

export const allNumberDivs = createAllNumberDivs(numberArray)