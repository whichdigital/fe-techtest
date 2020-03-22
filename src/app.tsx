import * as Preact from "preact";
import { h, JSX } from "preact";
import { useState } from "preact/hooks";
import { isMultipleOf } from "./multiplesOf";

export const Number = ({
  isActive,
  number,
  onClick
}: {
  isActive: boolean;
  number: number;
  onClick: (num: number) => void;
}) => (
  <label
    className={`number${isActive ? " number-active" : ""}`}
    data-testid="number-label"
  >
    <input
      checked={isActive}
      className="hide-visually"
      name="number[]"
      type="checkbox"
      value={number}
      onChange={(evt: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        onClick(number);
      }}
    />
    {number}
  </label>
);

export const Numbers = ({ numbers }: { numbers: number[] }) => {
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>(
    undefined
  );

  function handleSelectNumber(num: number) {
    if (selectedNumber) {
      setSelectedNumber(undefined);
      return;
    }

    setSelectedNumber(num);
  }

  return (
    <form>
      <div className="grid">
        {numbers.map(number => (
          <div key={number} className="grid-cell" data-testid="number">
            <Number
              isActive={Boolean(
                selectedNumber && isMultipleOf(selectedNumber, number)
              )}
              number={number}
              onClick={handleSelectNumber}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export const App = () => {
  const numbers = Array(144)
    .fill(undefined)
    .map((_, index: number) => index + 1);

  return <Numbers numbers={numbers} />;
};

/* istanbul ignore next */
export const renderApp = () => {
  Preact.render(<App />, document.getElementById("app-root") as Element);
};
