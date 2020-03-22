import { h } from "preact";
import { render } from "@testing-library/preact";
import { App } from "../app";

describe("App", function() {
  it("renders a hello world message", function() {
    expect(render(<App />).getByText("Hello World")).toBeTruthy();
  });
});
