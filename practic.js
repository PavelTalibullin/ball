'use strict'

// ДОБАВЛЯТЬ, ИЗМЕНЯТЬ, УДАЛЯТЬ ЭЛЕМЕНТЫ

// const myArr = [1, 2, 3, 4, 5];
// myArr.pop();
// console.log(myArr)

// myArr.push('Пять');
// console.log(myArr);

// myArr.shift()и
// console.log(myArr);

// myArr.unshift('Один');
// console.log(myArr);

// delete myArr[2];
// console.log(myArr)


// myArr.splice(2, 1, 'три');
// console.log(myArr);

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// КОПИРОВАНИЕ МАССИВА

// const copyArr = myArr.slice(0, 2);
// console.log(copyArr);


// const copyLast = myArr.slice(-4, -1)
// console.log(copyLast)


// const copyAndNew = myArr.concat('шесть', 7, 8)
// console.log(copyAndNew)
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// ПОИСК В МАССИВЕ

// ПРОСТОЙ ПОИСК

// const searchArr = [1, 2, 3, 4, 'text', 'textq', 5, 'qwerty'];
// console.log(searchArr.indexOf('text', 0));

// console.log(searchArr.lastIndexOf(4, 3));

// console.log(searchArr.includes('textq'));




// ПОИСК ОБЪЕКТОВ

// const arrObj = [
// 	{name: 'Pasha', age: 27, city: 'Ekb'},
// 	{name: 'Venya', age: 23, city: 'kiyv'},
// 	{name: 'Kostya', age: 28, city: 'London'},
// 	{name: 'Tolya', age: 18, city: 'NY'},
// 	{name: 'Messi', age: 36, city: 'Bars'},
// ];

// const searchFunc1 = arrObj.findIndex(function(item, index, array){
// 	return item.age === 18;
// });
// console.log(searchFunc1);

// const searchFunc = arrObj.find(item => item.age === 36);
// console.log(searchFunc);


// const searchFuncFull = arrObj.filter(item => item.age >= 27);
// console.log(searchFuncFull);


// const city = arrObj.filter(item => item.city ==='Bars');
// console.log(city);


// const cityPasha = arrObj.filter(item => item.city === 'Ekb');
// console.log(cityPasha);


// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// СОРТИРОВКА МАССИВОВ

// const number = [22, 3, 4, 555, 65, 65];
// number[2] = 1;
// console.log(number)

// function sortArr(a, b) {
// 	if(a > b) return 1
// 	if(a == b) return 0
// 	if(a < b) return -1
// };

// console.log(number.sort(sortArr));

// const numberSort = (a, b) => a - b;
// console.log(number.sort(numberSort));

// console.log(number.sort((a, b) => a - b));

// const stringSort = ['Buba', 'jusy', 'Pusy', 'tusya', 'kot'];
// console.log(stringSort.sort().reverse())
