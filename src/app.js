import { allNumberDivs } from "./numberDivs"

const app = () => {
  const numberContainer = document.createElement("div")
  document.body.append(numberContainer)
  numberContainer.append(...allNumberDivs)
};

export default app;
