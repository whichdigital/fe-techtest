import React from "react";
import { render, screen } from "@testing-library/react";
import NumberGrid from "../src/app/features/multiples/components/NumberGrid";


describe("Number", () => {
  it("renders without crashing", () => {
    render(<NumberGrid />);
  });

  it("renders array correctly", () => {
    const array = [...Array(144).keys()].map((i) => i + 1);
    render(<NumberGrid />);
    const numberGrid = screen
      .getAllByRole("presentation")
      .map((number) => Number(number.textContent));
    expect(numberGrid).toEqual(array);
  });
});
