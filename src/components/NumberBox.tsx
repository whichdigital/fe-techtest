import React from 'react';

interface INumberBox {
    number: number;
    callBack: CallableFunction;
    isMultiple: boolean;
}

const NumberBox = ({ number, callBack, isMultiple }: INumberBox) => {
    const clickHandler = (event: React.MouseEvent) => {
        const buttonClicked = event.currentTarget as HTMLButtonElement;
        const buttonValue = buttonClicked.value;
        callBack(buttonValue);
    };

    const accessibleLabel = `select this box to get multiples of ${number}`;

    return (
        <li className="number-box grid-item">
            <button
                id={number as unknown as string}
                type="button"
                value={number}
                className={isMultiple ? 'is-highlighted' : ''}
                onClick={clickHandler}
                aria-label={accessibleLabel}
                title={accessibleLabel}>
                {number}
            </button>
        </li>
    );
};

export default React.memo(NumberBox);
