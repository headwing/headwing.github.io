const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // JSON.stringify()를 사용하여 string으로 변경해야 localStorage에 array로 저장이 된다.
  // 이후에 JSON.parse()을 사용하여 자바스크립트가 이용가능한 object로 변환시킨다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // event의 target은 button이고, button의 부모는 li가 된다. 그래서 해당되는 li를 제거하면 된다.
  const li = event.target.parentElement;
  li.remove();
  // 클릭한 li.id와 다른 toDO는 남겨두고 싶다는 뜻.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* 이 과정을 간략히 화살표 함수(arrow function)로 나타낼 수 있다.
function sayHello(item) {
  console.log("this is the turn of", item);
}
아래 if문에서는 이렇게 수정, 여기서 sayHello라는 함수를 호출하면서 
array에 있는 각각의 item을 준다. 
ex) sayHello("a");  sayHello("b");  sayHello("c");

parsedToDos.forEach(sayHello);
*/

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // 여기서 toDos의 배열이 새로워지기 때문에 toDos를 let으로 바꿔야한다.
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

/* 원하는 element를 지우는 것은 실제로 지우는 게 아니라 지우고싶은 item을 제외하고
새로 array를 만드는 것이다. 아래의 경우  3이 아닌 것들만 true를 반환하고, 새 array에 
들어가게 된다.
function sexyFilter(item) {
return item !== 3;
}

이경우에 filter는 각각 1, 2, 3, 4를 sexyFilter에 넣어서 호출한다.
 ex) sexyFilter(1) 
 또한 sexyFilter함수는 새 array에서 이 object를 유지하고 싶으면 
 반드시 true를 리턴해야하고 유지하고 싶지 않으면 false를 리턴하면 된다. 
[1, 2, 3, 4].filter(sexyFilter);

아니면 간단한 방법으로 아래와 같이 쓸 수도 있다. (2 이상만 새로 만들기)
[1, 2, 3, 4].filter(item => item > 2);
 */
