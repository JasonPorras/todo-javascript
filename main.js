class TodoList {
  static empty = document.querySelector('.empty')
  static deleteAllCompleted = document.querySelector('#deleteAllCompleted')

  constructor(input, addBtn, ul, empty, icons) {
    this.input = input
    this.addBtn = addBtn
    this.ul = ul
    // TodoList.empty = empty

    this.icons = {
      university: './icons/university.svg',
      home: './icons/home.svg',
      gym: './icons/gym.svg',
    }

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
    checkbtn.textContent = '✓'

    const category = document.createElement('option')

    if (text !== '' && option.value !== 'category') {
      const li = document.createElement('li')
      const icon3 = document.createElement('img')
      icon3.setAttribute('data-iconcategory', option.value)

      const p = document.createElement('p')
      p.className = 'parrafo'
      p.textContent = text

      li.appendChild(p)
      this.ul.appendChild(li)
      li.appendChild(icon3)
      li.appendChild(category)
      li.appendChild(checkbtn)
      li.appendChild(this.addDeleteBtn())

      this.input.value = ''
      TodoList.empty.style.display = 'none'

      category.innerHTML = option.value
      category.className = 'filter-todo'
      const iconCategory = document.querySelectorAll('ul img')

      iconCategory.forEach((item) => {
        if ('Home' === item.dataset.iconcategory) {
          icon3.setAttribute('src', this.icons.home)
        } else if ('University' === item.dataset.iconcategory) {
          icon3.setAttribute('src', this.icons.university)
        } else if ('Gym' === item.dataset.iconcategory) {
          icon3.setAttribute('src', this.icons.gym)
        }
      })

      icon3.innerHTML = option.value

      const items = document.querySelectorAll('li')

      if (items.length === 0) {
        this.option.value = ''
      }
    } else {
      alert("There's missing Category or add a Task!")
    }
  }

  static noTasksMessage() {
    const items = document.querySelectorAll('li')

    if (items.length === 0) {
      this.complete = ''
      TodoList.empty.style.display = 'block'
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
        parentLi.querySelector('img').classList.toggle('completedTask')

        // anable or disable delete all completed button
        const deleteOneTask = document.querySelector('.btn-delete')
        if (document.querySelectorAll('[data-task="completed"]').length > 0) {
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

      TodoList.noTasksMessage()
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

      // const items = document.querySelectorAll('li')

      // if (items.length === 0) {
      //   this.complete = ''
      //   TodoList.empty.style.display = 'block'
      // }

      TodoList.noTasksMessage()
    })

    return deleteBtn
  }
}

const input = document.querySelector('input')
const addBtn = document.querySelector('#btn-add')
const option = document.querySelector('.filter-todo')
const ul = document.querySelector('ul')

new TodoList(input, addBtn, ul)
