'use strict'

// let a = {
// 	"text" : "Hello",
// 	"color" : "red",
// 	"bold" : true,
// 	'show' : function () {
// 		console.log(this.color);
// 	},
// };
// let b = {
// 	"fontSize" : "24px",
// 	__proto__: a,
// };

// let c = {
// 	"fontFamily" : "verdana",
// 	__proto__ : b,
// }

// console.log(c);
// console.log(c.bold);
// console.log(c.hasOwnProperty('bold'));















// let user = {
// 	login: '',
// 	password: '',
// 	validatePassword: function() {
// 		if(this.password.length > 6) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

// user.password = 'hello123';
// console.log(user.validatePassword());

// let user_profile = {
// 	username: '',
// 	photo: '',
// 	age: 0,
// 	__proto__ : user
// };

// user_profile.age = 25;
// user_profile.username = "Talib";
// console.log(user_profile)\

















class User {
	constructor(username, password){     //специальная функция
		this.username = username;			//Создаем свойства объекта
		this.password = password;
	}
	validatePassword() {					//Функция(Метод), где могу обращаться к свойствам
		console.log('work parrent pass')
		if (this.password.length > 6) {
			return true;
		} else {
			return false;
		}
	}
};

let a = 'Pasha';
let b = '7799997';

const person = new User(a, b);
console.log(person)
console.log(person.validatePassword());//Т.к. это метод, то ставим скобки вконце.(По сути это и дает отличие(для компа) свойства от метода)





class Stusent extends User {
	constructor(username, password, nickname) {
		super(username, password);
		this.nickname = nickname;
	}
	getStudentCourses() {
		return[1, 2];
	}
	validatePassword() {					//Функция(Метод), где могу обращаться к свойствам
		super.validatePassword();
		
		if (this.password.length > 10) {
			return true;
		} else {
			return false;
		}
	}
}

let firstStudent = new Stusent(a, b, ' 123');
console.log(firstStudent)
console.log(firstStudent.getStudentCourses())
console.log(firstStudent.validatePassword())