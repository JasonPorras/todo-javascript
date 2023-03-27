class TodoList {
  static deleteAllCompleted = document.querySelector('#deleteAllCompleted')

  constructor(input, addBtn, ul, empty) {
    this.input = input
    this.addBtn = addBtn
    this.ul = ul
    this.empty = empty

    this.addBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.addItem()
    })

    TodoList.completed()
    TodoList.deleteCompleted()
  }

  addItem() {
    const text = this.input.value
    const checkbtn = document.createElement('button')
    checkbtn.className = 'completedBtn'
    checkbtn.textContent = '+'

    const category = document.createElement('option')

    if (text !== '' && option.value !== 'category') {
      const li = document.createElement('li')
      const p = document.createElement('p')
      p.className = 'parrafo'
      p.textContent = text

      li.appendChild(p)
      this.ul.appendChild(li)
      li.appendChild(category)
      li.appendChild(checkbtn)
      li.appendChild(this.addDeleteBtn())

      this.input.value = ''
      this.empty.style.display = 'none'

      category.innerHTML = option.value
      category.className = 'filter-todo'

      const items = document.querySelectorAll('li')

      if (items.length === 0) {
        this.option.value = ''
      }
    } else {
      alert("There's missing Category or add a Task!")
    }
  }

  static completed() {
    document.querySelector('.todos').addEventListener('click', (e) => {
      if (e.target.matches('.completedBtn')) {
        const parentLi = e.target.parentNode
        parentLi.querySelector('p').classList.toggle('completedTask')
        parentLi.querySelector('option').classList.toggle('completedTask')

        // add data-task as completed if is it
        parentLi.hasAttribute('data-task')
          ? parentLi.removeAttribute('data-task')
          : parentLi.setAttribute('data-task', 'completed')

        // anable or disable delete all completed button
        const deleteOneTask = document.querySelector('.btn-delete')
        if(document.querySelectorAll('[data-task="completed"]').length > 0) {
          deleteOneTask.disabled = true
          TodoList.deleteAllCompleted.disabled = false
        } else {
          deleteOneTask.disabled = false
          TodoList.deleteAllCompleted.disabled = true
        }
      }
    })
  }

  // delete all tasks completed
  static deleteCompleted() {
    TodoList.deleteAllCompleted.disabled = true

    TodoList.deleteAllCompleted.addEventListener('click', () => {
      TodoList.deleteAllCompleted.disabled = true

      const completedTasks = document.querySelectorAll(
        '[data-task="completed"]',
      )

      for (let i = 0; i < completedTasks.length; i++) {
        completedTasks[i].remove()
      }
    })
  }

  addDeleteBtn() {
    const btnCompleted = document.createElement('button')
    const deleteBtn = document.createElement('button')

    btnCompleted.textContent = '*'
    btnCompleted.className = 'btn-check '

    deleteBtn.textContent = 'X'
    deleteBtn.className = 'btn-delete'

    deleteBtn.addEventListener('click', () => {
      const item = deleteBtn.parentElement
      item.parentNode.removeChild(item)

      const items = document.querySelectorAll('li')

      if (items.length === 0) {
        this.complete = ''
        this.empty.style.display = 'block'
      }
    })

    return deleteBtn
  }
}
console.log('Hola');
const input = document.querySelector('input')
const addBtn = document.querySelector('#btn-add')
const option = document.querySelector('.filter-todo')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')

const todoList = new TodoList(input, addBtn, ul, empty)
