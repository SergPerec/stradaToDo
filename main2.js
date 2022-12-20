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
  let deleteTask = list.findIndex(el => el.name === name);
  list.splice(deleteTask, 1)
}

function changeStatus(name) {
  let item = list.find(el => el.name === name);
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

function render() {
  let allTask = document.querySelectorAll('.task');
  for (let task of allTask) {
    task.remove()
  }
  list.forEach(function(el) {
    let div = document.createElement('div');
    div.className = 'task';
    
    let input = document.createElement('input');
    input.type = 'checkbox';
    if (el.status === STATUS.TODO) {input.setAttribute("checked",true)};
    input.addEventListener("change", changeStatusDom);
    
    let label = document.createElement('label');
    label.className = "task-text";
    label.textContent = el.name;
    
    let button = document.createElement("button");
    button.type = "button";
    button.className = "button remove-task";
    button.textContent = "+";
    button.addEventListener("click", deleteTaskDom);
    
    div.append(input);
    div.append(label);
    div.append(button);
    let placeTask = document.querySelector(`.${el.priority}`).nextElementSibling;
    placeTask.after(div);
    console.log(list)
  })
}