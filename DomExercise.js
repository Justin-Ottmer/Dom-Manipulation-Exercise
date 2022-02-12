//1
document.getElementById('container');

//2
document.querySelector('#container');

//3
document.querySelectorAll('.second');

//4
document.querySelector('ol .third');

//5
const section = document.querySelector('#container');
section.innerText = "Hello!";

//6
const div = document.querySelector('.footer');
div.classList.add('main');

//7
const div = document.querySelector('.footer');
div.classList.remove('main');

//8
const newLi = document.createElement('li');

//9
newLi.innerText = "four";

//10
const ul = document.querySelector('ul');
ul.append(newLi);

//11
const listItemsInOl = document.querySelectorAll("ol li");

for(let listItem of listItemsInOl){
  listItem.style.backgroundColor = "green";
}

//12
const removeDiv = document.querySelector('.footer');
removeDiv.remove();