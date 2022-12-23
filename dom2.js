// const search = document.getElementsByClassName('body');
// const search1 = document.getElementById('body')
// const search2 = document.querySelectorAll('h2')

// const childNodes = document.body.childNodes;
// console.log(document.body.hasChildNodes())

// const search = document.querySelector(".container")

// const nodes = search.childNodes;
// nodes.forEach((el) => console.log(el));

// const list = Array.from(nodes);

// const filtered = list.filter((item) => item.textContent.includes("Play again"));
// console.log(filtered)


// const filteredTags = filtered.map((item) => item.className)
// console.log(filteredTags)

// const link = document.querySelector('.game');

// console.log(document.body.childNodes)


// const primer = document.getElementsByTagName("h1")





const list = document.querySelector(".list");

// const element = document.createAttribute("li");
// element.classList.add("item");
// element.innerHTML = 'Hello world';

const list2 = list.cloneNode(true)
list.prepend(list2)
