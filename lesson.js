'use strict';

// const arr = [1, 2, 3, 4];
// console.log(arr.reverce());

// split - преобразует строку в массив.
// join - наоборот из массива в строку

// let names = 'user1, user2, user3, 12, 55, true'
// let arr = names.split(', ');
// console.log(arr);

// let users = ['user1', 'user2', 'user3', 12, 55, true]
// let names = users.join(', ');
// console.log(names);
// let arr = [1, 2, 3, 4, 5];
// let arr2 = {};
// let dance2 = arr.reduce((acc, item) => acc + item, 0);
// console.log(dance2);

// let dance = arr.reduce(function(acc, item) {
// return acc + item
// }, 0);


// let dance23 = arr.reduce((acc, item, index, array) => {}, 0);

// console.log(Array.isArray(arr2));

// const nested = [
//    'перший рівень',
//    'перший рівень',
//    [
//      'другий рівень',
//      'другий рівень',
//      [
//        'третій рівень',
//        'третій рівень'
//      ]
//    ]
// ];

// const flat = nested.flat();
// console.log(flat);


// const dance = { keyt: 'ihi' }

// const pop = Object.assign({}, dance)
// dance.top = 'bul';
// console.log(dance);
// console.log(pop);


// let obj = { name: 'user1'};
// let objCopy = { ...obj };
// objCopy.mama = 'pric'

// console.log(obj, objCopy);

// const original = {
// 	name: 'User',
// 	age: 10,
// 	b: {
// 		c: 1
// 	}
// };

// let copy = Object.assign({}, original);
// copy.gf = 'whf'
// let copy2 = { ...original}
// copy2.prrrr = {trek: true}
// console.log(original, copy, copy2 )


// const age1 = 20;
// const age2 = 20;

// console.log(age1 === age2);

// const obj1 = {name: 'pasha',}
// const obj2 = {name: 'pasha',}

// console.log(obj1 === obj2);


// const obj1 = {name: 'User'};

// const setAge = (obj, age) => {
// 	obj.age = age;

// 	return obj
// }

// console.log(setAge(obj1, 30));
// console.log(obj1);

// const obj1 = {
// 	name: 'User',
// 	age: 20,
// };

// for ( let key in obj1) {
// 	console.log(key);
// 	console.log(obj1[key]);
// 	console.log(obj1['name']);
// }

// let str="stringify"; // ring, получаем 4 символа, начиная с позиции 2
// console.log(str.substring(4, 1));


// //  СОЗДАНИЕ ПРОМИСА
//  const myPromise = new Promise((resolve, reject) => { //Обязательны эти два параметра. Эти параметры - функции.
// 	/**
// 	 * Выполение ассинхронных действий
// 	 * 
// 	 * внутри этой функции нужно в результате вызвать одну из функций resolve или reject (Исполнил или отклонен)
// 	 */
//  });

// // Получение результата Промиса
// myPromise
// .then ((value) => {
// 	/**
// 	 * Действия в случае успешного исполнения Промиса
// 	 * Значение value - значение, переданное в вызове функции resolve внутри Промиса
// 	 */
// })
// .catch((error) => {
// 	/**
// 	 * Действия в случае отклонения промиса
// 	 * Значение error - это значение, переданное в вызове функции reject внутри Промиса
// 	 */
// })


// fetch('https://jsonplaceholder.typicode.com/todos') //когда отправляем fetch запрос, fetch возвращает(создает) промис, в сосотоянии pending
// .then (response => response.json()) // Метод json возвращает промис
// .then (json => console.log(json)) // Для этого промиса вызываем метод then
// .catch (error => console.error(error))
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then (response => {
	console.log(response);
	return response.json()
})
.then (json => console.log(json))
.catch (error => console.error(error))