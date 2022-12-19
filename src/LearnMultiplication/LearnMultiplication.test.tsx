import renderer from "react-test-renderer";
import LearnMultiplication from "./LearnMultiplication";

it("renders correctly", () => {
  const tree = renderer.create(<LearnMultiplication />).toJSON();
  expect(tree).toMatchSnapshot();
});
