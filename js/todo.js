const toDoForm = document.getElementById("todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
//document.querySelector("#todo-form input")과 같음.
//document는 전체 html에서 input찾는거. 
//toDoForm하면 이 폼 안에서만 input값 찾는것
//이미 todoForm 찾았으니
let toDos = []; 
//const toDos = [];하면 초기에 비어있으니 todolist넣고 새로고침하면
//화면에는 이전 것들도 다 출력되지만 localStorage에는
//이전 것은 없어지고 새로 입력한 것들만 담김.
//그래서 let을 써서 업데이트 가능하도록
const TODOS_KEY = "todos";

function saveToDos(){
 //localStorage.setItem(TODOS_KEY,todos)하면 String으로 저장됨
 //'a','b','c' like this
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //이렇게 하면 '["a","b","c"]' 가 됨. 여전히 String.
    //텍스트로 저장된 것들을 배열화 
    //array가 되긴 됐는데 그 배열 자체가 하나의 문자열?문자가 됨.
}

function deleteToDo(event){
    const li = event.target.parentElement; 
    //button의 부모는 list겠지.
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //toDos안에 있는 요소들을 toDo라고 칭한다고 치자.
    //toDo의 id와 x표 클릭한 li의 id가 같으면 제거.
    //but li.id는 string, toDo.id는 number. parseInt해주자
    saveToDos();
    //이거 안써주면 삭제 잘 되지만 새로고침하면 삭제된게 다시 생김.
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    button.innerText = "❌";

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //text형식(string형식)이 아닌 object식으로 넘겨서 각각 id를 부여
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    //localStorage에 데이터 남아있지만 새로고침하면 화면에 출력X
    //새로고침해도 출력되도록.
    const parsedToDos = JSON.parse(savedToDos);
    //string이 아닌 js에서 사용가능한 object로 만들어줌
 // parsedToDos.forEach(sayHello);
    //parsedToDos가 갖고있는 각각의 item에 대해 sayHello 함수를 실행시켜라
    //array의 item들에 대해 한 개의 함수만 실행가능. for문 같은 것.
    //forEach((item) => console.log("hello", item))과 동일
    toDos = parsedToDos;
    //todos에 parsedtodos를 넣어서 전에 있던 todo들 복원
    parsedToDos.forEach(paintToDo);
}