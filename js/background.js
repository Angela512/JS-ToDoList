const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //자바에서 html element 생성

bgImage.src = `img/${chosenImage}`; 
//js에서 html코드 생성한 셈. html의 <img src="img/0.jpg">와 같음

document.body.appendChild(bgImage);