class TodoList {
  static deleteAllCompleted = document.querySelector('#deleteAllCompleted')

  constructor(input, addBtn, ul, empty) {
    this.input = input
    this.addBtn = addBtn
    this.ul = ul
    this.empty = empty

    this.icons = {
      university: './icons/university.svg',
      home: './icons/home.svg',
      gym: './icons/gym.svg'
    }

    this.addBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.addItem()
    })

    TodoList.completed()
    TodoList.deleteCompleted()

    // Call updateTimes function every minute
    setInterval(() => {
      this.updateTimes();
    }, 60 * 1000);
  }

  addItem() {
    const text = this.input.value
    const checkbtn = document.createElement('button')
    checkbtn.className = 'completedBtn'
    checkbtn.textContent = '✓'

    const category = document.createElement('option')

    if (text !== '' && option.value !== 'category') {
      const li = document.createElement('li')
      const icon3 = document.createElement("img")
      icon3.setAttribute('data-iconcategory', option.value)

      const p = document.createElement('p')
      p.className = 'parrafo'
      p.textContent = text

      const date = new Date(); // crear nueva instancia de Date
      const span = document.createElement("span");
      span.className = 'time'

      this.ul.appendChild(li)
      li.appendChild(p)
      li.appendChild(icon3);
      li.appendChild(category)
      li.appendChild(checkbtn)
      li.appendChild(this.addDeleteBtn())
      li.appendChild(span);
      li.dataset.timestamp = date.getTime(); // guardar timestamp en la propiedad "data-timestamp" del elemento li
      span.textContent = `${this.formatTime(date.getTime())}`; // llamar a la función formatTime para mostrar el tiempo transcurrido

      this.input.value = ''
      this.empty.style.display = 'none'

      category.innerHTML = option.value
      category.className = 'filter-todo'
      const iconCategory = document.querySelectorAll('ul img');

      iconCategory.forEach(item => {

        if ('Home' === item.dataset.iconcategory) {

          icon3.setAttribute('src', this.icons.home)
        } else if ('University' === item.dataset.iconcategory) {

          icon3.setAttribute('src', this.icons.university)
        } else if ('Gym' === item.dataset.iconcategory) {

          icon3.setAttribute('src', this.icons.gym)
        }
      })

      icon3.innerHTML = option.value;

      const items = document.querySelectorAll('li')

      if (items.length === 0) {
        this.option.value = ''

      }

      this.option.selectedIndex = 0;
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
        parentLi.querySelector('img').classList.toggle('completedTask');

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
    TodoList.deleteAllCompleted.disabled = true;

    TodoList.deleteAllCompleted.addEventListener('click', () => {
      TodoList.deleteAllCompleted.disabled = true;

      const completedTasks = document.querySelectorAll('[data-task="completed"]');

      for (let i = 0; i < completedTasks.length; i++) {
        completedTasks[i].remove();
      }
    });
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
        this.complete = ''
        this.empty.style.display = 'block'
      }
    })

    return deleteBtn
  }

  // Function to format the time elapsed
  formatTime(timestamp) {
    const now = new Date().getTime();
    const minutes = Math.floor((now - timestamp) / (1000 * 60));
    return `${minutes} min`;
  }

  // Function to update the time elapsed for each list item
  updateTimes() {
    const lis = this.ul.querySelectorAll("li");
    lis.forEach((li) => {
      const timestamp = parseInt(li.dataset.timestamp);
      const span = li.querySelector("span");
      span.textContent = `${this.formatTime(timestamp)}`;
    });
  }
}

const input = document.querySelector('input')
const addBtn = document.querySelector('#btn-add')
const option = document.querySelector('.filter-todo')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')

new TodoList(input, addBtn, ul, empty)
