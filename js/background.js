const images = ["0_.jpg", "1_.jpg", "2_.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// append는 가장 뒤에, prepend는 가장 앞에 오는 것이다.
document.body.appendChild(bgImage);
