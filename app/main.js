
let list = [];
const STATUS = {
  DONE: 'done',
  TODO: 'todo',
} 
const PRIORITY = {
  HIGH: 'high',
  LOW: 'low',
}

function Task(name, priority) {
	this.name = name;
	this.status = STATUS.DONE;
	this.priority = priority;
}

function addTask(name, priority) {
	let tasks = new Task(name, priority)
  list.push(tasks);
}

function deleteTask(name) {
  // let deleteTask = list.findIndex(el => el.name === name);
  // list.splice(deleteTask, 1)

  let i = 0;
  function deleteTaskRecurs(i, name) {
    if (list[i].name === name) list.splice(i, 1);
    i++;
    if (i > list.length) return;
    deleteTaskRecurs(i, name);
  }
  deleteTaskRecurs(i, name);
}

function changeStatus(name) {
  // let item = list.find(el => el.name === name);

  let item;
  let i = 0;
  function changeStatusRecurs(i, name) {
    if (list[i].name === name) return item = list[i];
    i++;
    if (i > list.length) return;
    changeStatusRecurs(i, name);
  }
  changeStatusRecurs(i, name);

  if (item.status === 'done') {
    item.status = STATUS.TODO
  } else {
    item.status = STATUS.DONE
  }
}

let forms  = document.querySelectorAll("form.add-task");
forms.forEach(function(el) { 
    el.addEventListener("submit", addTaskDom)
});

function addTaskDom(el) {
    el.preventDefault();
    let input = el.target.querySelector(".input-task-create");
    let name = input.value;
    if (!name) return input.value = '';
    let priority = input.closest(".add-task").previousElementSibling.className;
    addTask(name, priority);
    el.target.reset();
    render()
}

function changeStatusDom() {
  let nameTask = this.nextElementSibling.textContent;
  changeStatus(nameTask);
  render()
}

function deleteTaskDom() {
  let nameTask = this.previousElementSibling.textContent;
  deleteTask(nameTask);
  render()
}

function createElem(obj) {
	let div = document.createElement('div');
	div.className = 'task';

	let input = document.createElement('input');
	input.type = 'checkbox';
	if (obj.status === STATUS.TODO) { input.setAttribute("checked", true) };
	input.addEventListener("change", changeStatusDom);

	let label = document.createElement('label');
	label.className = "task-text";
	label.textContent = obj.name;

	let button = document.createElement("button");
	button.type = "button";
	button.className = "button remove-task";
	button.textContent = "+";
	button.addEventListener("click", deleteTaskDom);

	div.append(input);
	div.append(label);
	div.append(button);
	let placeTask = document.querySelector(`.${obj.priority}`).nextElementSibling;
	placeTask.after(div);
  console.log(list)
}

function render() {
  let allTask = document.querySelectorAll('.task');
  for (let task of allTask) {
    task.remove()
  }
  // list.forEach((el) => createElem(el))

  let i = 0;
  function renderRecurs(i) {
    createElem(list[i]);
    i++;
    if (i > list.length) return;
    renderRecurs(i);
  }
  renderRecurs(i)
}