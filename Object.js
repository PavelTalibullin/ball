'use strict'

// const user = new Object();    // Конструктор объекта
// const userName = {};          // Литерал объекта

// const firstPart = "like";
// const firstPart2 = "like2"

// const userInfo = {
// 	name: "Pasha",  // Связка ключ: значение
// 	age: 30,        // Ключ еще называют свойством, идентификатором, именем свойста объекта
// 	"Likes javaScript": true, // Если ключ состоит из двух слов, ставим ковычки 
// 	[firstPart + "javascript"]: true, //Можно вычислять ключ объекта

// 	[firstPart2]: true, // Или просто передаем имя свойства из переменной
// };

// console.log(userInfo);
// console.log(userInfo.age);

// console.log(userInfo["Likes javaScript"]); // Чтобы вызвать свойство состоящее из двух слов в ключе, то ключ помещаем в []

// console.log(userInfo[firstPart2]);

// Если мы запишем число в ключ объекта, то оно будет считаться строкой.
// Зарезервированные слова JS так же можно использовать в качестве ключа в объекте


// Объекты могут иметь вложенность

// let nameUser = {
// 	name: "Паша",
// 	age: 27,
// 	address: {				// Есть вложенность
// 		city: " ihdeJN ",
// 		street: "ashdlKJ",
// 	}
// }

// console.log(nameUser);
// console.log(nameUser.address.city);
// console.log(nameUser.address);

// function makeUserInfo(name, age) {
// 	return {
// 		name,
// 		age,
// 		//... другие свойства
// 	};
// }

// let user = makeUserInfo("Вася", 30);
// console.log(user);

// const userInfo = {
// 	name: "Паша",
// };

// console.log(userInfo);

// userInfo.age = 30;
// console.log(userInfo);

// userInfo["likes javascript"] = true;

// console.log(userInfo);

// userInfo.address = {
// 	city: "Екатеринбург",
// 	street: "Freedom",
// };

// console.log(userInfo);

// delete userInfo.name
// console.log(userInfo);

// console.log(userInfo.age = 18)


// const userInfo = { 
// 	name: "Паша",
// };

//  const userCopy = userInfo; // копирование объекта. Копируется ссылка на объект
// 	console.log(userCopy);

//Дублирование объекта, синтаксис
// Object.assign(куда(Объект), что(свойство №1), что(свойство №2), ...);

// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// };

// let user = Object.assign({}, userInfo);

// user.age = 18;
// console.log(userInfo);
// console.log(user)


// let userInfo = {
// 		name: "Вася",
// 		age: 30,
// 	};

// if(userInfo.age) {   // Проверка есть ли свойство
// 	console.log(userInfo.age);
// }


// -----------------------------

// Синтаксис "опциональная цепочка" ---> ?.

// let userInfo = {
// 	name: "Паша",
// 	age: 30,
// }

// console.log(userInfo?.address?.strret);
/*
Если мы просто запросим ключ объекта, которого не существует, то выпадет ошибка. Чтобы ошибки не было и есть "Опциональная цепочка". Для этого перед точкой используем ?, как бы проверяя, есть ли у нас это свойство, и если нет, то вместо ошибки получим Undefined
*/

// -----------------------------

// in - тоже можно проверить есть ли свойство
// let userInfo = {
// 	name: "Паша",
// 	age: 30,
// 	address: {
// 		city: "Nez",
// 		street: "lev",
// 	}
// }
// if("name" in userInfo) { //Использовать можно если значение свойства Undefined
// 	console.log(userInfo.name);
// };
// -------------------------------------


// цикл FOR IN - Для перебора всех свойств объекта. 
// for(let key in object) { //Сперва объявляем переменную, затем in и затем указываем объект
	// Тело цикла выполняется для каждого свойсвта объекта
// };

// let userInfo = {
// 	name: "Паша",
// 	age: 30,
// 	address: {
// 		city: "Nez",
// 		street: "lev",
// 	}
// }

// for(let key in userInfo) {
// 	//ключи
// 	console.log(key);
// 	// Значения ключей
// 	console.log(userInfo[key]);
// }

// for(let key in userInfo.address) {
// 	//ключи
// 	console.log(key);
// 	//значение значений
// 	console.log(userInfo.address[key]);
// }


// ----------------------------------------
// МЕТОДЫ ОБЪЕКТА
// В объекте могут быть функции, эти функции называются методами
// let userInfo = {
// 		name: "Паша",
// 		age: 30,
// 		address: {
// 			city: "Nez",
// 			street: "lev",
// 		},
// 		showInfo() { // Метод объекта
// 			console.log(`${userInfo.name}, ${userInfo.age}`)
// 		}
// 	}

// 	userInfo.showInfo();
// -------------------------------------------

// this - заменяет текущий объект. Оращается к ПЕРВОМУ РОДИТЕЛЬСКОМУ ОБЪЕКТУ
// let userInfo = {
// 	name: "Паша",
// 	age: 30,
// 	address: {
// 		city: "Nez",
// 		street: "lev",
// 	},
// 	showInfo() {
// 		console.log(`${userInfo.name}, ${userInfo.age}`) //Было такое
// 		console.log(`${this.name}, ${this.age}`) // стало такое
// 	}
// }
//ДЛЯ СТРЕЛОЧНЫХ ФУНКЦИЙ НЕТ THIS
// THIS Надежней, чем использовать имя функции

// ------------------------------------------

// ФУНКЦИЯ КОНСТРУКТОР
/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/

// function UserInfo(name) {

// 	// this = {}; Создается пустой объект (неявно)

// 	this.name = name; // Получаемое значение
// 	this.age = 30; // Объявленное значение

// 	// return this; Возвращается объект (неявно). мы это тоже не пищем, это происходит автоматически
// }

// console.log(new UserInfo('Вася'));
// console.log(new UserInfo('Лена'));


// --------------------------------------------


// const userInfo = {
// 	name: "Pasha",
// 	age: 27,
// 	showInfo() {
// 		console.log(`${this.name}`);
// 	},
// }
// let user = userInfo;
// userInfo = null;

// console.log(user.showInfo);