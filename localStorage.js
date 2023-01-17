window.addEventListener('storage', function(e) {
	console.log('change')
});

localStorage.setItem('data', 5);
console.log(localStorage.getItem('data'))

const a = [3,4,5];
localStorage.setItem("a", JSON.stringify(a));
let b = JSON.parse(localStorage.getItem("a"));
console.log(b);
console.log(b[2]);
console.log(typeof b);
console.log(typeof a);
console.log(b.length);
console.log(a.length);