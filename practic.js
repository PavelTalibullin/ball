'use strict';

// ИМПЕРАТИВНЫЙ СТИЛЬ, НАБОР КОНРЕТНЫХ КОМАНД
// function numberOdd(array) {
// 	const result = []; // сперва присваиваем переменной значение []
// 	for (const element of array) { // Затем проходимся по каждому элементу в массиве
// 		if(element % 2 !== 0){ // Проверка нечетный ли элемент 
// 			result.push(element); // если да, добавить в результат
// 		}
// 	}
// 	return result // Вернуть результат
// }

// // ДЕКЛАРАТИВНЫЙ СТИЛЬ, НЕ ПРИБЕГАЯ К ДЕТАЛЯМ
// function numberOdd(array) {  // Мы только говорим что нам нужно отфильтровать массив. Нам даже не важно, кто и как это будет делать
// 	return array.filter((element) => element % 2 !== 0)
// }

// Prototype - либо = null, либо ссылается на другой объект. Вот этот объект и есть прототип

// const godUser = {
// 	isGod: true
// }

// const user = {
// 	name: "Jonh",
// 	age: 30,
// 	sayHi(){
// 		console.log(this.name)
// 	}
// }

// user.__proto__ = godUser;

// const admin = {
// 	isAdmin: true,
// }

// admin.__proto__ = user;

// console.log(admin);
// console.log(admin.age);

// const objectProto = {
// 	is: true,
// }

// const arrayProto = {
// 	map(item) {
// 		return item
// 	}
// }
// arrayProto.__proto__ = objectProto;

// Object.getPrototypeOf();
// Object.setPrototypeOf();
// const array = [];
// array.lenght

// let dance = {
// 	latin: 'samba',
// 	step() {
// 		console.log("Animal walk");
// 	}
// };

// let rabbit = {
// 	jumps: true,
// 	__proto__: dance,
// };

// let longEar = {
// 	earLenght: 10,
// 	__proto__: rabbit,
// };

// longEar.step();
// alert(longEar.jumps)


// В результате методы являются общими, а состояние объекта — нет.
// let animal = {
// 	walk() {
// 	  if (!this.isSleeping) {
// 		 alert(`I walk`);
// 	  }
// 	},
// 	sleep() {
// 	  this.isSleeping = true;
// 	}
//  };
 
//  let rabbit = {
// 	name: "White Rabbit",
// 	__proto__: animal
//  };
 
//  // модифицирует rabbit.isSleeping
//  rabbit.sleep();
 
//  alert(rabbit.isSleeping); // true
//  alert(animal.isSleeping);

// const user = {
// 	name: "User",
// };

// const admin = {
// 	name: "Admin",
// };

// admin.__proto__ = user;

// console.log(admin.name1); // Если такого свойства нет в объектах, будет посик в глобальной среде. Если и там не будет, то значение undefined
// delete admin.isAdmin


// const animal = {
// 	walk() {
// 		if (!this.isSleeping) {
// 			console.log("I walk")
// 		}
// 	},
// 	sleep(){
// 		console.log("this", this);
// 	}
// };

// const rabbit = {
// 	name: "Rabbit",
// 	__proto__: animal, //Тоже самое что и "rabbit.__proto__ = animal"
// }; 
// rabbit.sleep(); // Вызовется метод слип
// // console.log(rabbit.isSleeping); // тру - Правильно
// // console.log(animal.isSleeping); // тру - X


// const animal = {
// 	isAnimal: true,
// };

// const rabbit = {
// 	name: 'Rabbit',
// 	age: 30,
// 	isRabbit: true,
// 	__proto__: animal,
// };

// for (let prop in rabbit) {
// 	console.log(rabbit.hasOwnProperty(prop))
// } 

// const obj = {
// 	_hiddenName: "Hide", 
// };
 

// Object.defineProperty(obj, 'name', {
// 	get: function() {return this._hiddenName},
// 	set: function(value) {this._hiddenName = value},
// });

// console.log(obj.name); // get
// obj.name = "user"; // set. Вызывается как характеристика, и передается туда новое значение. Юзер - это велью

// console.log(obj);

// const animal = {
// 	_hiddenName: "Hide", 

// 	get name() {
// 		return this._hiddenName; 
// 	}, 

// 	set name(value) {
// 		this._hiddenName = value;
// 	},
// };

// console.log(animal.name);
// animal.name = "user";

// console.log(animal);

// const user = {
// 	_name: "Name",
// 	_surname: "Surname",

// 	get fullName() {
// 		return `${this._name} ${this._surname}`
// 	},

// 	set fullName(fullName) {
// 		const result = fullName.split(" "); //["Pasha", "Tal"]
		
// 		this._name = result[0];
// 		this._surname = result[1];
// 	}
// };

// console.log(user.fullName);

// user.fullName = "Pasha Tal";

// console.log(user.fullName);


// const user = {
// 	name: "NAme",
// 	age: 30,
// };

// function User(name1, age1) {
// 	this.name = name1;
// 	this.age = age1;
// }

// const user = new User("Jack", 30);
// // 1. Создается пустой объект -> {}
// // 2. Затем выполняется тело функции конструктора
// // {
// // 	this.name = name;
// // 	this.age = age;
// // }
// // 3. 
// // const user = {
// // 	name: "NAme",
// // 	age: 30,
// // };

// console.log(user);

// const human = {
// 	isHuman: true,
// };

// function Paha(name = "Defoult user", age = 20) {
// 	this.fullName = name;
// 	this.age = age;
// };

// Paha.prototype = human;

// const user = new Paha();

// console.log(user)