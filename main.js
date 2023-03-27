class TodoList {
  constructor(input, addBtn, ul, empty) {
    this.input = input
    this.addBtn = addBtn
    this.ul = ul
    this.empty = empty

    this.addBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.addItem()
    })

    TodoList.deleteCompletedTasks()
  }

  addItem() {
    const text = this.input.value

    if (text !== '') {
      const li = document.createElement('li')
      const p = document.createElement('p')
      p.textContent = text
      p.classList.add('task')

      li.appendChild(p)
      this.ul.appendChild(li)
      li.appendChild(this.addDeleteBtn())

      this.input.value = ''
      this.empty.style.display = 'none'
    }
  }

  addDeleteBtn() {
    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'X'
    deleteBtn.className = 'btn-delete'

    deleteBtn.addEventListener('click', () => {
      const item = deleteBtn.parentElement
      item.parentNode.removeChild(item)

      const items = document.querySelectorAll('li')

      if (items.length === 0) {
        this.empty.style.display = 'block'
      }
    })

    return deleteBtn
  }

  static deleteCompletedTasks() {
    let deleteCompleted = document.querySelector('.deleteCompleted');
    deleteCompleted.disabled = true

    document.querySelector('.tasks').addEventListener('click', (e) => {
      if (e.target.matches('.task')) {
        deleteCompleted.disabled = false
        e.target.parentNode.setAttribute('data-target', 'taskCompleted')
        e.target.style.backgroundColor = 'red'
      }
    })

    document.querySelector('.deleteCompleted').addEventListener('click', (e) => {
      deleteCompleted.disabled = true
        
      document.querySelectorAll('[data-target="taskCompleted"]').forEach((item) => {
       item.remove()
      });
    })
  }
}

const input = document.querySelector('input')
const addBtn = document.querySelector('#btn-add')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')

const todoList = new TodoList(input, addBtn, ul, empty)
