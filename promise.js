'use strict'

// new Promise((resolve, reject) => {тело промиса})		+
//
// Очередь промисов								+
//
// .then() 											+
// .catch()											+
// .finaly()										+
//
// setTimeout(() => {},1000)					+
//
// Promise.all([])	+ ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.
//
// ===================================================
// Promise.allSettled()		+ (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
// status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
// value – результат, если успешно или reason – ошибка, если нет.
// ====================================================
//
// Promise.race	+ Метод очень похож на Promise.all, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).
//
// Promise.any		+ (добавлен недавно)Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.
//
// Promise.resolve/reject				(Используется крайне редко, так как есть async и await) Поэтому эти два метода по сути и ненужны
//
//
// fetch()			(11.3)
//
// async					(11.8)
// await



let urls = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/remy',
	'https://no-such-url'
 ];
 
 Promise.allSettled(urls.map(url => fetch(url)))
	.then(results => { // (*)
		console.log(results)
	  results.forEach((result, num) => {
		console.log(num)
		 if (result.status == "fulfilled") {
			console.log(`${urls[num]}: ${result.value.status}`);
		 }
		 if (result.status == "rejected") {
			console.log(`${urls[num]}: ${result.reason}`);
		 }
	  });
	});

