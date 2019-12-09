import { numberArray } from "./numberArray"

export const createNumberDiv = number => {
  let div = document.createElement("div")
  div.innerText = number
  return div
}