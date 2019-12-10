import { allNumberDivs } from "./numberDivs"

let selectedNumber

export const isMultiple = number => !(number % selectedNumber)

export const setDivColour = div => {
  div.className = selectedNumber && isMultiple(div.innerText) ? "selected" : null
}

export const setAllDivColours = array => array.forEach(setDivColour)

export const setSelectedNumber = number => number !== selectedNumber && number

export const handleClick = number => {
  selectedNumber = setSelectedNumber(number)
  setAllDivColours(allNumberDivs)
}