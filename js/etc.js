const a = 5;
const b = 2;
let myName = "YouJung";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is " + myName);

const player = {
  name: "You Jung",
  age: 98,
};
console.log(player);
player.name = "CHOI";
player.secondName = "You Jung";
console.log(player, console);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const addresult = calculator.add(7, 10);
const minresult = calculator.minus(addresult, 10);
const divresult = calculator.divide(addresult, minresult);

calculator.minus(7, 10);
calculator.times(7, 10);
calculator.divide(7, 10);
calculator.power(7, 10);

function calKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const age = 96;
const krAge = calKrAge(age);
console.log(krAge);

const title = document.getElementById("title");
const title = document.getElementsByClassName("title");
const title = document.querySelector(".title h1");
title.innerText = "hello";
console.log(title);

const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleH2Mouseenter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleH2Mouseleave: function () {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleWindowResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handlewindowContextmenu: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[3];
  },
};

h2.addEventListener("mouseenter", superEventHandler.handleH2Mouseenter);
h2.addEventListener("mouseleave", superEventHandler.handleH2Mouseleave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.handlewindowContextmenu
);

const h2 = document.querySelector("h2");

function handleH2Click() {
  const currentColor = h2.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h2.style.color = newColor;
}

h2.addEventListener("click", handleH2Click);

const h2 = document.querySelector("h2");

//clicked 클래스는 따로 만들어야 함!
//classList를 사용하지 않고 className을 쓰면 싹다 바뀌기에 좋지 못하다.
function handleH2Click() {
  const clickedClass = "clicked";
  if (h2.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h2.addEventListener("click", handleH2Click);

//위의 5줄 if else 코드를 축약한 기능이 아래의 toggle임.
// 즉 해당 element의 classList에서 해당 클래스가 있는지 확인하여,
//있으면 해당 클래스를 classList에서 제거하고 없으면 추가하는 것임.
const h2 = document.querySelector("h2");

function handleH2Click() {
  h2.classList.toggle("clicked");
}

h2.addEventListener("click", handleH2Click);
//위와 같이 자바스크립트의 toggle을 통해 CSS에서 정의된 class name들로
//HTML element에서 숨기고 나타내는 방법을 배운 것이다.

//과제
const colors = ["#2E88D5", "#904FAD", "#EEBC10"];
const hello = document.querySelector("body");

function colorHandle() {
  if (window.innerWidth < 400) {
    hello.style.backgroundColor = colors[0];
  } else if (window.innerWidth >= 400 && window.innerWidth < 600) {
    hello.style.backgroundColor = colors[1];
  } else {
    hello.style.backgroundColor = colors[2];
  }
}

colorHandle();
window.addEventListener("resize", colorHandle);
