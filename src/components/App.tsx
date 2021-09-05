import { useState } from 'react';
import NumberBox from './NumberBox';

function App() {
    const [chosenNumber, setChosenNumber] = useState<number>(0);

    const numberOfButtons: number = 114;
    let numbersArray: number[] = [];

    for (let i = 1; i <= numberOfButtons; i++) {
        numbersArray = [...numbersArray, i];
    }

    const numberBoxList = numbersArray.map((num) => (
        <NumberBox
            key={num}
            number={num}
            callBack={setChosenNumber}
            isMultiple={num % chosenNumber === 0 ? true : false}
        />
    ));

    return (
        <div className="App container">
            <ol className="grid">{numberBoxList}</ol>
        </div>
    );
}

export default App;
