function squareNumber (number) {
    console.log(number * number);
};

function square (numbers, func) {
    for (const number of numbers) {
        func(number);
    }
};

const array = [1, 2, 3, 4, 5, 6];

square(array, squareNumber);