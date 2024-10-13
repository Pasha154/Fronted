const textInput = document.querySelector('#textInput');
const addTooList = document.querySelector('#addTodoList');
const todoList = document.querySelector("#todoList");

addTooList.addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.className='todo-li-item';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete'
    deleteButton.innerText = 'Delete';
    li.innerText = textInput.value;
    todoList.appendChild(li);
    li.appendChild(deleteButton);
    textInput.value = '';
    deleteButton.addEventListener('click', (e)=>{
       if (e.target.className === 'delete'){
           li.remove();
       }
    })

})

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        li.remove();
    }
});
