import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import Number from "../src/app/features/multiples/components/Number";
describe("Number", () => {
  it("renders without crashing", () => {
    render(<Number />);
  });

  it("renders number correctly", () => {
    render(<Number number={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders color for number correctly", () => {
    render(<Number number={5} color={"selected"} />);
    expect(screen.getByRole("tab", { name: 5 })).toHaveClass("selected");
  });

  it("call onClick succesfully", () => {
    const setSelectedNumber = jest.fn();
    render(<Number number={1} setSelectedNumber={setSelectedNumber} />);
    fireEvent.click(screen.getByRole("tab", { name: 1 }));
    expect(setSelectedNumber).toHaveBeenCalledTimes(1);
  });
});
