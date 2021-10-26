//const loginForm = document.querySelector("#login-form");
//const loginInput = document.querySelector("Input");
//const loginButton = ducument.querySelector("Button");
//이 세 줄을 두 줄로 표현.^
//const loginForm = document.querySelector("#login-form input");
//const loginInput = document.querySelector("Input button");

//const loginForm = document.getElementById("login-form"); 이렇게도 가능

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); 
    //기본 동작(submit의 기본동작인 새로고침)이 실행되지 않게 막아줌.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //local Storage는 text만 저장가능.
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}