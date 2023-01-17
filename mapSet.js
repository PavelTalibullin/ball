
// const user = {
// 	isAdmin: true,
// 	fullName: "User SecondName",
// }


// const map = new Map();
// map.set("userName", "User Name");
// map.set("age", 30)
// map.set(user, true)


// map.forEach((value, key) => {
// 	console.log(`${key} - ${value}`)
// });

// for (let item of map) {
// 	console.log(item)
// }


// for (let item of map.keys()) {
// 	console.log(item)
// };

// for (let item of map.values()) {
// 	console.log(item)
// }

// for (let item of map.entries()) {
// 	console.log(item)
// }

// const map = new Map([['js', 'JavaScript'], ['css', 'CascadingStyle']]);

// map ---> Array
// const arr = [...map];




// Map -> Object (1)
// const mapToObject = (map) => {
// 	const obj = {};

// 	map.forEach((key, value) => {
// 		obj[key] = value;
// 	})
// 	return obj;
// }

// console.log(mapToObject(map))

// Map -> Object (2)
// const obj = Object.fromEntries(map);
// console.log(obj);



// Object --> Map

// const objToUser = {
// 	name: "User",
// 	age: 30,
// 	isAdmin: true,
// }
// const objToMap = (obj) => {
// 	const map = new Map();
// 	Object.entries(obj).forEach(item => {
// 		map.set(item[0], item[1])
// 	})
// 	return map;
// }
// console.log(new Map(Object.entries(objToUser)))


const set = new Set([1, 2, 3, 3, 3, 'hello']);
const arr = [...set];
console.log(arr)