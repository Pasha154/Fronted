const textInput = document.querySelector('#textInput');
const addTooList = document.querySelector('#addTodoList');
const todoList = document.querySelector("#todoList");
let listItems = JSON.parse(localStorage.getItem('listItems')) || [];


function saveListItemsToLocalStorage() {
    localStorage.setItem('listItems', JSON.stringify(listItems));
}


function addTodoItem(text, isChecked = false) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.style.position = "fixed";
    checkbox.style.left = "468px";
    checkbox.checked = isChecked;

    const li = document.createElement('li');
    li.className = 'todo-li-item';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Delete';

    li.innerText = text;
    todoList.appendChild(checkbox);
    todoList.appendChild(li);
    todoList.appendChild(deleteButton);
    li.appendChild(checkbox);


    if (isChecked) {
        li.style.textDecoration = 'line-through';
        li.style.background = 'green';
        li.style.padding = '3px';

        const newImage = document.createElement("img");
        newImage.src = 'Image/accept.png';
        newImage.style.width = "25px";
        newImage.style.height = "25px";
        newImage.className = 'task-image';
        li.appendChild(newImage);
    }


    checkbox.addEventListener('change', () => {
        let existingImage = li.querySelector('img');

        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            li.style.background = 'green';
            li.style.padding = '3px';

            if (!existingImage) {
                const newImage = document.createElement("img");
                newImage.src = 'Image/accept.png';
                newImage.style.width = "25px";
                newImage.style.height = "25px";
                newImage.className = 'task-image';
                li.appendChild(newImage);
            }
        } else {
            li.style.textDecoration = 'none';
            li.style.background = 'none';
            li.style.padding = "0px";

            if (existingImage) {
                existingImage.remove();
            }
        }


        const index = Array.from(todoList.children).indexOf(li) / 3;
        listItems[index].isChecked = checkbox.checked;
        saveListItemsToLocalStorage();
    });


    deleteButton.addEventListener('click', (e) => {
        if (e.target.className === 'delete') {
            const index = Array.from(todoList.children).indexOf(li) / 3;
            listItems.splice(index, 1);
            li.remove();
            checkbox.remove();
            deleteButton.remove();
            saveListItemsToLocalStorage();
        }
    });
}


addTooList.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text !== '') {
        listItems.push({ text, isChecked: false });
        addTodoItem(text);
        saveListItemsToLocalStorage();
        textInput.value = '';
    }
});

window.addEventListener('load', () => {
    listItems.forEach(item => addTodoItem(item.text, item.isChecked));
});
