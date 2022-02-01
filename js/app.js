const todoInput = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')

submitBtn.addEventListener('click', function(evt) {
  let newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  todoList.appendChild(newTodo)
  todoInput.value = ''
})

resetBtn.addEventListener('click', function(evt) {
  todoList.innerHTML = ''
})

todoList.addEventListener('click', function(evt) {
  let parentNode = evt.target.parentNode
  parentNode.removeChild(evt.target)
})
