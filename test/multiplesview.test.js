
import React from "react";
import { render } from "@testing-library/react";
import MultiplesView from "../src/app/features/multiples/view/MultiplesView";


describe("MultiplesView", () => {
  it("renders without crashing", () => {
    render(<MultiplesView />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<MultiplesView />);
    expect(asFragment()).toMatchSnapshot();
  }
  )
});