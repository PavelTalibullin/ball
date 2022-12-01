'use strict'

//Объявление функции (Function Declaration)

function showMessage() {
	console.log("сообщение")
	return
};
// Применение функций

// Функция соединения строк
function createMassage(text, name) {
	return `${text}, ${name}!`;
}
// Функция вывода в консоль
function showMassage(message) {
	console.log(message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
	showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер');
