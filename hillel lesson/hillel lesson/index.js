// const getJSONData = (keys) =>
//   fetch("config/config.json")
//     .then((response) => response.json())
//     .then((myJson) => {
//       if (keys.length > 1) {
//         const result = {};
//         keys.map((key) => (result[key] = myJson[key]));
//         return result;
//       } else {
//         return myJson[keys];
//       }
//     });

// getJSONData(["users"]).then((data) => console.log(data));
// getJSONData(["users", "country"]).then((data) => console.log(data));
// getJSONData(["defaultColor", "maxGroupLimit"]).then((data) =>
//   console.log(data)
// );

// class Назва extends Батьківський клас  {
//     constructor
//     методи
//   }

// class User {

//     constructor(name) {
//       this.name = name;
//     }

//     sayHi() {
//       console.log(this.name);
//     }

//   }

//   let user = new User("John");

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(newValue) {
//     [this.firstName, this.lastName] = newValue.split(" ");
//   }
// }

// let user = new User("James", "Bond");

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   static createGuest() {
//     return new User("Unknown", "Guest");
//   }
// }

// let user = User.createGuest();

class Users {
  constructor(users) {
    this.users = users;
  }

  addId() {
    this.users.forEach((user) => (user.id = Math.random()));
  }

  changeUsername(nameToChange, newName) {
    this.users.find((item) => item.name === nameToChange).name = newName;
  }
}

// let users = new Users([
//   { name: "John" },
//   { name: "Steve" },
//   { name: "Andrew" },
// ]);

// users.addId();

// users.changeUsername("John", "Bob");

// console.log(users);

class Students extends Users {
  constructor(students) {
    super(students);
  }

  addId() {
    super.addId();
    this.users.forEach((item, index) => (item.studentId = index));
  }

  addMark(studentName, mark) {
    this.users.find((item) => item.name === studentName).mark = mark;
  }
}

let students = new Students([
  { name: "Mari" },
  { name: "Franklin" },
  { name: "Garet" },
]);

students.addId();

students.addMark("Mari", 2);

console.log(students);
