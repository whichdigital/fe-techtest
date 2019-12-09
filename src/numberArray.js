export const createNumberArray = (min, max) => {
  return Array.from({length: max + 1 - min}, (x, index) => index + min)
}