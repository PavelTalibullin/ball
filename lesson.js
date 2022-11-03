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

const nested = [
   'перший рівень',
   'перший рівень',
   [
     'другий рівень',
     'другий рівень',
     [
       'третій рівень',
       'третій рівень'
     ]
   ]
];

const flat = nested.flat();
console.log(flat);