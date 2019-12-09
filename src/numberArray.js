export const createNumberArray = (min, max) => {
  return Array.from({length: max + 1 - min}, (x, index) => index + min)
}

export const numberArray = createNumberArray(1,144)