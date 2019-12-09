let selectedNumber

export const isMultiple = number => !(number % selectedNumber)

export const setDivColour = div => {
  div.style.backgroundColor = selectedNumber & isMultiple(div.innerText) ? "Yellow" : null
}

export const setAllDivColours = array => array.forEach(setDivColour)

export const setSelectedNumber = number => number !== selectedNumber && number