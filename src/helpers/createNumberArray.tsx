export const createNumberArray = (min: number, max: number) => {
    let numbersArray: number[] = [];

    for (let i = min; i <= max; i++) {
        numbersArray = [...numbersArray, i];
    }

    return numbersArray;
};
