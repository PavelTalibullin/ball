// let i = 0;
// while (i < 5) {
// 	console.log(i);
// 	i++;
// };



// let i = 0;
// do {
// 	console.log(i)
// 	i++;
// }while (false)



// for (let i = 0; i <= 5; i++) {
// 	console.log(i)
// }



// let sum = 0;
// while (true) {
// 	let value = +prompt("Enter number", "");
// 	if(!value) break;
// 	sum += value;
// };
// console.log(sum)



// for(let i = 0; i < 10; i++) {
// 	if(i % 2 == 0) continue
// 	console.log(i)
// }


// const user = {
// 	name: "User",
// 	isAdmin: true,
// 	age: 27,
// };

// for (let key in user) {
// 	console.log(key)
// 	console.log(user[key])
// }



// const users = ["Qwerty1","Qwerty2","Qwerty3","Qwerty4"]
// for (let user of users) {
// 	console.log(user)
// }



const statusCode = 500;
switch (statusCode) {
	case 100: {
		console.log("Status code of our up 100");
		break;
	}
	case 200: {
		console.log("Status code of our up 200");
		break;
	}
	case 300: {
		console.log("Status code of our up 300");
		break;
	}

	default: {
		console.log('default');
		break;
	}
}
const statusCode2 = 500;
switch (statusCode2) {
	case 100:
	case 200:
	case 300: {
		console.log("Status code of our up 300");
		break;
	}

	default: {
		console.log('default');
		break;
	}
}