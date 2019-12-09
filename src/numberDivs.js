import { numberArray } from "./numberArray"
import { handleClick } from "./colourFunctions"

export const createNumberDiv = number => {
  let div = document.createElement("div")
  div.innerText = number
  div.onclick = () => handleClick(number)
  return div
}

export const createAllNumberDivs = array => array.map(createNumberDiv)

export const allNumberDivs = createAllNumberDivs(numberArray)