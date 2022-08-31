//cached element references
const input = document.getElementById("info")
const btn = document.getElementById("submit-button")
const ul = document.getElementById("todo-list")

btn.addEventListener('click', function(evt){

  const li = document.createElement('li') //can console.log('li') to check to see if this step is working
  li.textContent = input.value 
  console.log(li)
  input.value = ' '
  document.querySelector('ul').appendChild(li)
})

