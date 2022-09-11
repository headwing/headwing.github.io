const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote:
      "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
    author: "채근담",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "제임스 오펜하임",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
  {
    quote:
      "삶은 소유물이 아니라 순간 순간의 있음이다. 영원한 것이 어디 있는가? 모두가 한때일뿐. 그러나 그 한때를 최선을 다해 최대한으로 살 수 있어야 한다. 삶은 놀라운 신비요, 아름다움이다.",
    author: "법정스님",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/*
Math.round()는 숫자를 소수점 아래 반올림
Math.ceil()은 숫자를 무조건 소수점 아래 올림
Math.floor()는 숫지를 무조건 소수점 아래 버림
*/

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
