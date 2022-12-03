'use strict'

// const user = new Object();    // Конструктор объекта
// const userName = {};          // Литерал объекта

// ===============================================================
//Поиск в пустом объекте
let dance = {};
console.log(dance.samba === undefined)


// Проверка свойства в объекте с помощью in
const user = {name: 'Nastya', age: 22, sport: 'dance'};
console.log('age' in user);
console.log('lastName' in user);

// ================================================================
// цикл for..in для перебора всех свойст
// for (key in object) {
	//тело цикла выполняется для каждого свойства объекты
// }

const sport = {
	fight: 'MMA',
	dance: 'Afro',
	auto: 'Rally',
};

for (let key in sport) {
	console.log(key);  // ключи
	console.log(sport[key]) // свойста
}

alert( 9999999999999999 );