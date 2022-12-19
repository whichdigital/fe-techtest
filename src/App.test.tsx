import renderer from "react-test-renderer";
import App from "./App";

it("correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
