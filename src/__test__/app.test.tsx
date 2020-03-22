import { h } from "preact";
import { render, fireEvent } from "@testing-library/preact";
import { App, Number, Numbers } from "../app";

describe("App", () => {
  it("renders 144 numbers", () => {
    expect(render(<App />).getAllByTestId("number")).toHaveLength(144);
  });
});

describe("Numbers", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const multiple = [1, 2, 3, 4, 6, 12];
  const nonNumbers = [5, 7, 8, 9, 10, 11];

  it("renders all multiples", () => {
    expect(
      render(<Numbers numbers={numbers} />).getAllByTestId("number")
    ).toHaveLength(numbers.length);
  });

  it("should ONLY highlight multiples of a number clicked", () => {
    const { getByText, getAllByTestId } = render(<Numbers numbers={numbers} />);
    const factor = 12;
    fireEvent.click(getByText(String(factor)));
    multiple.forEach(multiple => {
      expect(getByText(`${multiple}`).className).toMatch(/number-active/i);
    });
    nonNumbers.forEach(multiple => {
      expect(getByText(`${multiple}`).className).not.toMatch(/number-active/i);
    });
  });

  it("should NOT highlight multiples of a number clicked", () => {
    const { getByText, getAllByTestId } = render(<Numbers numbers={numbers} />);
    const factor = 12;
    fireEvent.click(getByText(String(factor)));
    nonNumbers.forEach(multiple => {
      expect(getByText(`${multiple}`).className).not.toMatch(/number-active/i);
    });
  });

  it("should deslect a highlighted number when clicked", () => {
    const { getByText, getAllByTestId } = render(<Numbers numbers={numbers} />);
    const factor = 12;
    fireEvent.click(getByText(String(factor)));
    fireEvent.click(getByText(String(factor)));
    numbers.forEach(multiple => {
      expect(getByText(`${multiple}`).className).not.toMatch(/number-active/i);
    });
  });
});

describe("Number", () => {
  it("should call `onClick` with `number`", () => {
    const number = 5;
    const onClickSpy = jest.fn();
    const { getByText } = render(
      <Number isActive={false} number={number} onClick={onClickSpy} />
    );
    fireEvent.click(getByText(`${number}`));
    expect(onClickSpy).toHaveBeenCalledTimes(1);
    expect(onClickSpy).toHaveBeenCalledWith(number);
  });
});
