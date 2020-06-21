//Selector  
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const trashButton = document.querySelector('.trash-btn');


//EventListener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', checkTodo);


//Function

// function addTodo(e){
//     e.preventDefault();
//     //create todo div
//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
//     //create li
//     const newTodo = document.createElement('li');
//     newTodo.innerText='hey';
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);
//     //completed button
//     const completedButton = document.createElement('button');
//     completedButton.innerHTML='<i class="fas fa-check"></i>';
//     completedButton.classList.add('complete-btn');
//     todoDiv.appendChild(completedButton);
//     //trash button
//     const trashButton = document.createElement('button');
//     trashButton.innerHTML='<i class="fas fa-trash"></i>';
//     trashButton.classList.add('trash-btn');
//     todoDiv.appendChild(trashButton);
//     //append to list
//     todoList.appendChild(todoDiv);
// }

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
    todoInput.value="";
};

function deleteTodo (e){
    if (e.target.classList.contains('trash-btn')){
    const trash=e.target.parentElement;
    trash.remove()
    }
};

function checkTodo (e) {
    const check=e.target.parentElement;
    console.log(check)
    check.classList.add('completed');
}