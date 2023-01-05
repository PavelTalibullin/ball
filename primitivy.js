'use strict'

const numberOne = 10;
const numberTwo = 12.12345
const string = "str"
const bool = true;
const boolF = false;
const array1 = [1,2,3]
const array2 = [4,5,6]

const numberRound = Math.floor(numberTwo)
console.log(numberRound);
const numberRound1 = Math.ceil(numberTwo)
console.log(numberRound1)
const numberR2 = Math.round(numberTwo);
console.log(numberR2)
const nr3 = Math.trunc(numberTwo);
console.log(nr3)
const nr4 = numberTwo.toFixed(4);
console.log(nr4);

// ПРОВЕРКА
// const proverka = isNaN(numberOne)
// const proverka2 = isFinite(numberOne)
// console.log(isNaN(string))
// console.log(isFinite(string))
// console.log(proverka)
// console.log(proverka2)
// console.log(isNaN(bool))
// console.log(isNaN(boolF))
// console.log(isFinite(boolF))
// console.log(isFinite(bool))

// console.log(isNaN(NaN))
// console.log(NaN === NaN)
// console.log(isNaN(Infinity))

// console.log(Number.isNaN(string))
// console.log(isNaN(string))

// console.log(Object.is(string, bool)) // Работает как string === bool
// console.log(Object.is(boolF, boolF))

// console.log(true + false)
// console.log([...[1,2,'f'], ...['d',5,6]])

// ПРЕОБРАЗОВАНИЕ
// const numberStr = +string;
// console.log(numberStr);


console.log(string.charAt(2))
console.log(string.indexOf('r'))
console.log(string.startsWith('s'))
console.log(string.startsWith('10'))
