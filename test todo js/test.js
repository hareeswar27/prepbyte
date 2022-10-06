//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list')
const parent = document.querySelector('.parent');
// Event listners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck)

//functions
function addTodo(event){
    let hide=document.getElementById('hidethis')
    hide.style.display='none'
    
    //prevent form to submiting
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li')
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const unorder = document.createElement('ul')
    unorder.classList.add('list-in-box')
    todoDiv.appendChild(unorder)
    //check mark button
    //const completedButton = document.createElement('button');
   // completedButton.innerHTML = '<span class="material-symbols-outlined">done</span>';
   // completedButton.classList.add('complete-btn');
   // todoDiv.appendChild(completedButton)


    
    const inputInTodo = document.createElement('input')
    inputInTodo.classList.add('input-in-box')
    todoDiv.appendChild(inputInTodo)
    const butInBox = document.createElement('button')
    butInBox.innerHTML='<span class="material-symbols-outlined">add</span>'
    butInBox.classList.add('innerBut-box')
    todoDiv.appendChild(butInBox)

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)
    parent.appendChild(todoDiv)
    //clear todo input value
    todoInput.value="";
    

}
function deleteCheck(e){
    console.log(e.target);
const item = e.target;
if(item.classList[0]==="trash-btn"){
const todo = item.parentElement;
todo.remove();
}
if(item.classList[0]==='complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed')
}
}


const todoInput2 = document.querySelector('.input-in-box');
const todoButton2 = document.querySelector('.innerBut-box');
const todoList2 = document.querySelector('.list-in-box');


todoButton.addEventListener('click',addTodo2);
todoList.addEventListener('click',deleteCheck)

//functions
function addTodo2(event){
    //prevent form to submiting
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li')
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<span class="material-symbols-outlined">done</span>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)
    
    todoList2.appendChild(todoDiv)
    //clear todo input value
    todoInput.value="";
}