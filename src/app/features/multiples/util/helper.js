
export const getStyle = (number, selectedNumber) => {
  if (number === selectedNumber) {
    return "selected";
  }
  if (number % selectedNumber === 0) {
    return "highlighted";
  }
  return " ";
};
