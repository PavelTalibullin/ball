'use strict';

// let arr = new Array(); // Используется редко
// const arr1 = []; // Используется часто

// let arrOne = ['pasha', 'sasha', 12];



// arrOne[0] = 'kolya';
// arrOne[4] = true;
// console.log(arrOne);



// console.log(arrOne);// length - это свойство
// // let myArr = arrOne;
// // myArr.length = 2;
// // console.log(myArr)
// console.log(arrOne)


// let arrOne2 = [
// 	'pasha',
// 	'sasha',
// 	12,
// ];

// const myArr = [
// 	12,
// 	'qwerty',
// 	{
// 		key: 23,
// 		pey: 24,
// 		bool: true,
// 	},
// 	true,
// 	false
// ];

// console.log(myArr);


// const myArrTwo = [
// 	[1, 3, 5],
// 	[2, 4, 6],
// 	[12,23, 8]
// ];
// console.log(myArrTwo);

// let arrOne = [
// 	'Ваня',
// 	'Иштван',
// 	'Оля',
// ];
// console.log(arrOne[0]);
// console.log(arrOne.length);


// let arrTwo = [
// 	"Коля",
// 	{
// 		type: "JS",
// 		age: 36
// 	},
// 	true,
// 	function () {
// 		console.log('Привет, я Коля');
// 	}
// ];

// console.log(arrTwo);
// console.log(arrTwo[0]);
// console.log(arrTwo[1].type);
// console.log(arrTwo[2]);
// arrTwo[3]();



// const matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// console.log(matrix[2][1]);


// let arrOne = ['Паша', "Настя", "Оля"];
// console.log(arrOne);

// let arrNew = arrOne;

// arrNew.length = 2;

// console.log(arrOne);



// let arr = ['Паша', "Настя", "Оля"];

// arr[0] = 'Коля';

// arr[3] = 'Веня';

// console.log(arr);



// Метод push - добавляет элемент в конец массива

// let arr = ['Ваня', 'Иштван', 'Оля',];
// arr.push('Вася');
// console.log(arr);

// arr.push('Дима', 'Катя');
// console.log(arr);

// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

// let arr = ['Ваня', 'Иштван', 'Оля',];
// arr.shift();
// console.log(arr);


// Метод pop  - удаляет последний элемент

// let arr = ['Ваня', 'Иштван', 'Оля',];
// arr.pop();
// console.log(arr);



// let arr = ['Ваня', 'Иштван', 'Оля',];

// delete arr[1];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);


// // Удаляем элемент
// let arrOne = ['Ваня', 'Иштван', 'Оля',];
// // Начиная с первой позиции (Иштван), удаляем один элемент
// arrOne.splice(1, 1);
// console.log(arrOne);

// // Удаляем элемент и возвращаем его в переменную
// let arrTwo = ['Ваня', 'Иштван', 'Оля',];
// let removed = arrTwo.splice(1, 1);
// console.log(removed);

// // Заменяем элементы
// let arrThree = ['Ваня', 'Иштван', 'Оля',];
// // Начиная с нулевой позиции (Ваня), заменяем один элемент
// arrThree.splice(0, 1, 'Коля');
// console.log(arrThree);

// // Добавляем элементы
// let arrFour = ['Ваня', 'Иштван', 'Оля',];
// // Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
// arrFour.splice(1, 0, 'Коля', 'Маша');
// console.log(arrFour);

// // Удаляем элемент
// let arrFive = ['Ваня', 'Иштван', 'Оля',];
// // Начиная с последней позиции (Оля), удаляем один элемент
// arrFive.splice(-1, 1);
// console.log(arrFive);





// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

// let arrOne = ['Ваня', 'Иштван', 'Оля',];
// let arrTwo = arrOne.concat('Петя');
// console.log(arrTwo);