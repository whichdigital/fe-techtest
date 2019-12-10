// source goes here
const titleEl = document.querySelector('#title')
const tileContainerEl = document.querySelector('#numbers-container')

export const generateNumbers = () => { // generates specified grid number of items
  const numberOfGridItems = 144
  return Array.from(Array(numberOfGridItems).keys()).map(num => ++num)
}

const allNumbers = generateNumbers()
const HIGHLIGHTED = "highlighted"

const tileGenerator = num => {
  let tileEl = document.createElement('div')
  tileEl.dataset.number = num
  tileEl.innerText = num
  tileEl.className = "number-tile"
  return tileEl
}

const generateAllTiles = numberList => {
  return numberList.map(num => tileGenerator(num))
}

const renderTiles = numberList => {
  generateAllTiles(numberList).forEach(tile => tileContainerEl.appendChild(tile))
}

const findMultiples = selected => {
  return allNumbers.filter(num => num % selected === 0)
}

const retrieveTilesToHighlight = fromSelected => {
  return findMultiples(fromSelected).map(num => document.querySelector(`[data-number='${num}']`))
}

const retrieveHighlightedTiles = () => {
  return [...document.querySelectorAll(`.${HIGHLIGHTED}`)]
}

const highlightMultiples = selectFrom => {
  retrieveTilesToHighlight(selectFrom).forEach(tile => {
    tile.classList.add(HIGHLIGHTED)
  });
}

const unHighlightMultiples = () => {
  retrieveHighlightedTiles().forEach(tile => {
    tile.classList.remove(HIGHLIGHTED)
  })
}

tileContainerEl.addEventListener('click',(e) => {
  const selectedNumber = e.target.dataset.number
  const isMultiple = selectedNumber && ![...e.target.classList].includes(HIGHLIGHTED)
  if (isMultiple && retrieveHighlightedTiles().length === 0) {
    highlightMultiples(parseInt(selectedNumber))
  } else if (isMultiple  && retrieveHighlightedTiles().length > 0) {
    unHighlightMultiples()
    highlightMultiples(parseInt(selectedNumber))
  }else if (!isMultiple) {
    unHighlightMultiples()
  }
})

renderTiles(allNumbers)

const app = {
  generateNumbers,
  tileGenerator,
  findMultiples,
  highlightMultiples,
  unHighlightMultiples

}

console.log(app)

// export default app