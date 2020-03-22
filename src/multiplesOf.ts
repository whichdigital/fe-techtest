export function getMultiplesOf(factor: number): number[] {
  const multiples = [];
  for (let i = 1; i <= factor; i++) {
    if (factor % i === 0) {
      multiples.push(i);
    }
  }

  return multiples;
}

export function isMultipleOf(factor: number, number: number): boolean {
  return Boolean(getMultiplesOf(factor).find(multiple => multiple === number));
}
