import React, { useState } from 'react';
import { isMultiple } from '../helpers/isMultiple';
import NumberBox from './NumberBox';
import { createNumberArray } from '../helpers/createNumberArray';

function App() {
    const [chosenNumber, setChosenNumber] = useState<number>(0);

    const numbersArray = createNumberArray(1, 144);

    const numberBoxList = numbersArray.map((num) => (
        <NumberBox key={num} number={num} callBack={setChosenNumber} isMultiple={isMultiple(num, chosenNumber)} />
    ));

    return (
        <div className="App container">
            <ol className="grid">{numberBoxList}</ol>
        </div>
    );
}

export default App;
