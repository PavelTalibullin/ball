'use strict'

let number = 12.64567;
let number2 = 14;
let number3 = 9;
let string = '123reth';
let string2 = '13.23';
// Методы NUMBER
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
console.log(Math.trunc(number));
console.log(number.toFixed(3)); // Возвращает строку. Если указали значение больше чем чисел после запятой, добавляются нули
// Методы проверок
console.log(isNaN(number))
console.log(isFinite(number))
// Преобразования
console.log(parseInt(string));
console.log(parseInt(string2));
console.log(parseFloat(string2));
console.log(string.toString());
//Другие фукнции
const random = Math.random();
console.log(random);

console.log(Math.max(number, number2, number3));
console.log(Math.min(number, number2, number3));
console.log(Math.pow(number2, number3));
//Операции над числами
const proc = 10 % 4; //  %
console.log(proc);

console.log(proc**4); //  ** 
console.log(proc < 3); //  > <  == >=   <=


//STRING

