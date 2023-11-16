const inputText = document.querySelector('input');
const sendButton = document.querySelector('button');
const taskList = document.querySelector('ul');

const checkSpace = (value) =>{
    return value.trim().length;
}


const createButtonDelete = () => {
    const newButton = document.createElement('button');
    newButton.classList.add('button')
    const buttonText = document.createElement('img');
    buttonText.classList.add('img-container')
    newButton.addEventListener('click',(e)=>{
        e.preventDefault();
        e.target.parentElement.remove()
    })
    newButton.appendChild(buttonText);
    return newButton
}

const createTaskList = (value) =>{
    const newList = document.createElement('li');
    newList.classList.add('li')
    const newListText = document.createTextNode(value.trim());
    const deleteButton = createButtonDelete();
    newList.appendChild(newListText);
    newList.addEventListener('mouseover',()=>{
        newList.appendChild(deleteButton);
    })
    return newList
}

const addList = () =>{
    const inputValue = String(inputText.value);
    if(checkSpace(inputValue)){
        const newTaskList = createTaskList(inputValue);
        taskList.prepend(newTaskList);
    }
    inputText.value = ""
}

sendButton.addEventListener('click',(e)=>{
    e.preventDefault()
    addList()
})