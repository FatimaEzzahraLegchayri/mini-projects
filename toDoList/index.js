const input = document.getElementById('input-box')
const taskList = document.getElementById('list-container')


function addTask(){
    if(input.value === ''){
        alert('You need to write somthing')
    }else{
        const newtask = document.createElement('li')
        newtask.innerHTML = input.value
        taskList.appendChild(newtask)
        input.value = ''
    }
}

