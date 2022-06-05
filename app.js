const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.filter-todo');




const alertWarning = document.querySelector('.alert-warning');

const alertSuccess = document.querySelector('.alert-success');


todoButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', deleteCheck)


function addTodo(e){
    e.preventDefault();
    const isEmpty = str => !str.trim().length;

    if(isEmpty(todoinput.value)){
        alertWarning.style.display =' block ';
        setTimeout(() => {
            alertWarning.style.display =' none ';

        }, 1500);

        todoinput.value = '';
    }else{
        alertSuccess.style.display =' block ';
        setTimeout(() => {
            alertSuccess.style.display =' none ';

        }, 1500);

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
    
        const completedButton = document.createElement('button');
        completedButton.innerHTML = "<i class='fas fa-check-circle'></i>";
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
    
        const newTodo = document.createElement('li');
        newTodo.innerText = todoinput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
    
    
    
    
        const trashButton = document.createElement('button');
            trashButton.innerHTML = "<i class= 'fa fa-minus-circle'></i> ";
            trashButton.classList.add('trash-btn');
            todoDiv.appendChild(trashButton);
    
            todoList.appendChild(todoDiv);
    
    
            todoinput.value = '';
            
    
    }

   
}
function deleteCheck(e){
    const item = e.target; 

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        }) 
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }

}