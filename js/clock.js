const clock = document.querySelector("#clock"); //h2#clock 이렇게해도됨 스타일차이.

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); 
    //시간은 숫자로 반환되는데 padStart는 문자열을 사용하므로.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //1초 뒤에 실행되는게 아니라 최초로 호출시엔 바로 띄우고싶을때
setInterval(getClock, 1000); //초마다 호출
