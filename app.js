
let arrayOfTodos
let isFetchComplete = 0;

async function fetchTodos() {
  if (isFetchComplete == 0) {
    //let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let response = await fetch('people.json')
    arrayOfTodos = await response.json();
    isFetchComplete = 1;
  }
}

async function logTodos() {
  await fetchTodos()
  console.log(arrayOfTodos)
}

async function populateTodos() {
  await fetchTodos();
  let ol = document.createElement('ol');
  ol.style.marginTop ="30px"
  for (let i = 0; i < arrayOfTodos.length; i++) {
    let li = document.createElement('li');
    let tf = arrayOfTodos[i].completed
    if (!tf) {
      li.style.backgroundColor  = "#ffb3b3"
    }
    li.style.border = '1px solid black';
    let txt = 'id=' + arrayOfTodos[i].id
      + ';userId=' + arrayOfTodos[i].userId
      + ';completed=' + tf
      + ';title=' + arrayOfTodos[i].title
    li.innerHTML = txt;
    ol.appendChild(li);
  }
  document.getElementById('btns').insertAdjacentElement("afterend",ol)  
}

