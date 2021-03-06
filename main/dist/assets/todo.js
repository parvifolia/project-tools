//Selector  
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const trashButton = document.querySelector('.trash-btn');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', checkTodo);


// Check Local Storage and update Ui

let lastTodosLocal = JSON.parse(localStorage.getItem("todos"));
if (lastTodosLocal){
    lastTodosLocal.forEach(e=>{
        html = `
        <div class="todo">
            <li class="todo-item">
                ${e}
            </li>
            <button class="complete-btn">
                <i class="fas fa-check"></i>
            </button>
            <button class="trash-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`
        todoList.innerHTML += html;
        todoInput.value="";
    })
} if (!lastTodosLocal) {
    lastTodosLocal = []
}



function addTodo(e){
    e.preventDefault();
    html = `
    <div class="todo">
        <li class="todo-item">
            ${todoInput.value}
        </li>
        <button class="complete-btn">
            <i class="fas fa-check"></i>
        </button>
        <button class="trash-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`
    todoList.innerHTML += html;

    // add value to local storage
    lastTodosLocal.push(todoInput.value);
    localStorage.setItem("todos",JSON.stringify(lastTodosLocal));

    //clear input
    todoInput.value="";
};

function deleteTodo (e){
    if (e.target.classList.contains('trash-btn')){
 
    // delete todo from local storage
    const trashText=e.target.parentElement.children[0].innerText;
    const indexTodo = lastTodosLocal.indexOf(trashText);
    lastTodosLocal.splice(indexTodo,1);
    localStorage.setItem("todos",JSON.stringify(lastTodosLocal));

    // delete todo from ui
    const trash=e.target.parentElement;
    trash.remove()
    }
};

function checkTodo (e) {
    const check=e.target.parentElement;
    check.classList.toggle('completed');
}
