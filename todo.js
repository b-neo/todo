const todoSection = document.querySelector(".todos");
const todoForm = todoSection.querySelector("#todoForm");
const input = todoForm.querySelector("input");

function clearTodo(){
    const todos = todoSection.querySelectorAll(".todo");
    if (todos.length>0){
        for (let index = 0; index < todos.length; index++) {
            todos[index].remove();
        }
    }
}

function loadTodo(){
    let savedTodo = JSON.parse(localStorage.getItem("todo"));
    if (savedTodo){
        showTodo();
    }
}

function addTodo(e){
    e.preventDefault();
    let savedTodo = JSON.parse(localStorage.getItem("todo"));
    if (savedTodo){
        let savedTodo = JSON.parse(localStorage.getItem("todo"));
        divId = new Date().getTime();
        savedTodo.push(input.value +"#"+divId);
        const temp = JSON.stringify(savedTodo);
        localStorage.setItem("todo", temp); 
        input.value = "";
        showTodo();
    
    }
    else{
        const newTodo = [];
        divId = new Date().getTime();
        newTodo.push(input.value +"#"+divId);
        localStorage.setItem("todo", JSON.stringify(newTodo));
        input.value = "";
        showTodo();
    }
}

function showTodo(){
    clearTodo();
    const todos = JSON.parse(localStorage.getItem("todo"));
    for (let index = 0; index < todos.length; index++) {
        const div = document.createElement("div");
        const todo = document.createElement("span");
        const x = document.createElement("span");
        todo.innerText = todos[index].split("#")[0];
        todo.classList.add("todo__item");
        x.innerText = "❎";
        x.addEventListener("click", deleteTodo);
        divId = todos[index].split("#")[1];
        div.id = divId;
        div.classList.add("todo");
        div.appendChild(todo);
        div.appendChild(x);  
        todoSection.append(div);
    }
}

function deleteTodo(e){
    const target = e.target.parentElement;
    const text = target.querySelector("span.todo__item").innerText;
    const savedTodo = JSON.parse(localStorage.getItem("todo"));
    const filteredTodo = savedTodo.filter((val) => {
        const todoTxt = val.split("#")[0];
        const todoId = val.split("#")[1];
        return todoTxt !== text && todoId !== target.id}) 
    localStorage.setItem("todo", JSON.stringify(filteredTodo));
    target.remove();
    

}

loadTodo();
todoForm.addEventListener("submit", addTodo);