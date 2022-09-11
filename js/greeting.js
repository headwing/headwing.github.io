/* 가능한 다른 방법
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/
const loginForm = document.getElementById("login-form");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

/* string만 포함된 변수는 관습적으로 대문자로 표기, 
또한 위의 변수들처럼 중요한 정보를 담은게 아닌 경우에 대문자로 표기 
실수를 만들고 싶지 않은 반복되는 string */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* loginInput이라는 object안에 value라는 속성은 사용자가 입력한 값을 의미하고,
그 값을 미리 HTML에서 value=""를 통해 입력해둘 수 있긴 하다.
*/
/* 아래와 같이 유저가 입력하는 값에 대한 유효성 검사를 할 수 있지만 HTML에서 제공하는
기본기능을 사용하는 것이 더 유용하다. form을 만든 뒤에 input에 required와 maxlengh ="15" 등을 이용하는 것인데,
form이 반드시 있고 그 안에 input이 있어야 쓸 수 있다. 그런데 지금의 문제는 로그인 버튼을 누르면
form이 submit되면서 웹사이트가 재시작된다는 것이다. input안에 있는 button을 누르거나
type이 submit인 input을 클릭하거나 엔터를 누르면 (그러므로 더 이상 click에 관심둘 필요X)
form이 submit되면서 새로고침되는데 그것을 막고 정보를 저장해보자.

function loginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}
loginButton.addEventListener("click", loginBtnClick);
*/

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}
// 여기서 username은 걍 인자를 의미하고 a같은 걸로 바꿔도 상관X
function paintGreeting(username) {
  /* string과 변수를 string으로 바꿔
  결합하거나 string안에 변수를 집어넣고 싶을 때 2가지 방법
  greeting.innerText = "Hello " + username; */
  greeting.innerText = `Hello ${username} `;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(savedUsername);
}

/* 함수를 실행할 때 그냥 실행하는 것이 아니고, 브라우저에서 제공하는 어떠한 정보를 받아서
그것을 함수의 argument로 넣어서 실행한다. 그 첫번째 argument는 방금 발생한 event(여기서는 submit)
에 대해 내가 필요로 할만한 정보들을 주는 것이다. 그러므로 argument 공간을 제공하여 JS가 정보를 지닌
argument를 채워넣어줄 것이다. 즉 공간을 만들어주어 받으면 된다.
loginSubmit을 위해 EventListener 함수의 첫번째 인자로 주어지게 될 것이다.
EventListener가 loginSubmit을 실행하면서 브라우저가 event에 대한 정보를 
argument로 loginSubmit에게 떠넘겨준다. 담아준다. 그리고 그 정보 안에는 몇가지 함수도 같이 들어있고,
그 중에 하나가 preventDefault 함수이다.

function loginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
  console.dir(event);
  console.log(event);
}

loginForm.addEventListener("submit", loginSubmit);

preventDefault 함수는 브라우저가 기본적으로 해당 함수를 실행할 때 수행하는 것들, 예를 들면
새로고침같은 것들을 막는 역할을 한다. 그리고 이것은 EventListener 함수로 실행된 첫 번째 argument
안에 있는 function이다.
*/

/* Local Storage는 미니 DB라고 생각하면 된다. 유저의 정보들을 저장해준다.
사용법은 localStorage.setItem(key, value) 이와 같이 key값(값의 이름)과 value(값)를 
각각 순서에 맞게 넣어주면 된다.
*/
