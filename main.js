class TodoList {
  constructor(input, addBtn, ul, empty) {
    this.input = input;
    this.addBtn = addBtn;
    this.ul = ul;
    this.empty = empty;

    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.addItem();

    });
    TodoList.complete();
  }

  addItem() {
    const text = this.input.value;
    const checkbtn = document.createElement("button")
    checkbtn.className = 'completedBtn';
    checkbtn.textContent = '+';

    const category = document.createElement("option");

    if (text !== "" && option.value !== "category") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.className = "parrafo";
      p.textContent = text;

      li.appendChild(p);
      this.ul.appendChild(li);
      li.appendChild(category);
      li.appendChild(checkbtn);
      li.appendChild(this.addDeleteBtn());

      this.input.value = "";
      this.empty.style.display = "none";

      category.innerHTML = option.value;
      category.className = "filter-todo";

      const items = document.querySelectorAll("li");

       if (items.length === 0) {
       this.option.value = "";
      }
    }

  }

  static complete() {
    document.querySelector('.todos').addEventListener('click', (e) => {

      if (e.target.matches('.completedBtn')) {

        const parentLi = e.target.parentNode;
        parentLi.querySelector('p').classList.toggle('completedTask');
        parentLi.querySelector('option').classList.toggle('completedTask');

      }
    })
  }


  addDeleteBtn() {
    const btnCompleted = document.createElement("button");
    const deleteBtn = document.createElement("button");


    btnCompleted.textContent = "*";
    btnCompleted.className = "btn-check ";

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", () => {
      const item = deleteBtn.parentElement;
      item.parentNode.removeChild(item);

      const items = document.querySelectorAll("li");

      if (items.length === 0) {
        this.complete = "";
        this.empty.style.display = "block";
      }
    });

    return deleteBtn;
  }
}


const input = document.querySelector("input");
const addBtn = document.querySelector("#btn-add");
const option = document.querySelector(".filter-todo");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

const todoList = new TodoList(input, addBtn, ul, empty);