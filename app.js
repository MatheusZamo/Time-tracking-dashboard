const btnNewMarkup = document.querySelector('#btn-add')
const boxNewTask = document.querySelector('#new-task')
const btnClose = document.querySelector('#icon-close')


btnNewMarkup.addEventListener('click',() => {
    boxNewTask.style.display = 'block'
})
btnClose.addEventListener('click,',() => {
    boxNewTask.style.display = 'none'
})
