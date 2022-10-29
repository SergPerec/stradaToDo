const list = [
  { name: 'create a post', status: 'In progress', priority: 'low' },
  { name: 'test', status: 'Done', priority: 'high' },
];

const statusList = {
  DONE: "Done",
  TODO: "To Do",
  IN_PROGRESS: "In progress",
};

function examination(task) {
  if (!task) console.log('Вы не ввели задание.');
};

function changeStatus(name, status) {
  let person = list.find(item => item.name === name);
  person.status = status;
};

function addTask(task, priorety) {
  list.push(
    { name: task, status: statusList.IN_PROGRESS, priorety: priorety }
  );
};

function deleteTask(task) {
  const index = list.findIndex(person => person.name === task);
  if (index !== -1) {
    list.splice(index, 1);
  }
}

function showList() {
  console.log(`${statusList.TODO}:`);
  let person = list.filter(person => person.status === statusList.TODO);
  if (person.length == 0) console.log(`\t---`);
  person.forEach(person => console.log('\t' + person.name));
  
  console.log(`${statusList.IN_PROGRESS}:`);
  person = list.filter(person => person.status === statusList.IN_PROGRESS);
  if (person.length == 0) console.log(`\t---`);
  person.forEach(person => console.log('\t' + person.name));
  
  console.log(`${statusList.DONE}:`);
  person = list.filter(person => person.status === statusList.DONE);
  if (person.length == 0) console.log(`\t---`);
  person.forEach(person => console.log('\t' + person.name));
}

addTask('lunch');
addTask('lerning');
addTask('runing');
changeStatus('lunch', 'In progress');
changeStatus('lerning', 'Done');
deleteTask('test')
showList();