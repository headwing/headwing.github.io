/* interval은 매번 일어나야하는 무언가를 말한다. 
ex) 매 2초마다 무슨일이 일어나게 하고 싶을때 
timeouts는 해당 코드를 바로 실행하지 않고 
얼마간 기다렸다가 실행하고 싶을때 사용*/
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

/* "1".padStart(5, "0")의 의미는 앞의 String이 5글자가 아닐 시, 
맨 앞의 패딩으로 "0"을 추가하여 5글자를 만들라는 뜻이다.
"1".padEnd(2, "0")의 의미는 앞의 String이 2글자가 아닐 시, 
맨 뒤의 패딩으로 "0"을 추가하라는 말이다. 즉 둘다 원래의 string을 더 길게
만들고 싶을 때 사용하는 것이다.

참고로 number를 string으로 바꾸는 함수는 String()이다.

new Date()를 통해 Date object를 새로 생성하고, Date object는
호출하는 당시의 현재 날짜와 시간을 알려준다.*/
