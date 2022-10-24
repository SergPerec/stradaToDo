const listObj = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};

const statusObj = {
  DONE: "Done",
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
};

function examination (task) {
  if (!task) console.log('Вы не ввели задание.');
}

function changeStatus(task, status) {
  examination(task);
  if (
    status !=statusObj.DONE && 
    status !=statusObj.TODO && 
    status !=statusObj.IN_PROGRESS
    ) 
    console.log('Вы ввели не верный статуc');
    else listObj[task] = status;
}

function addTask(task) {
  examination(task);
  listObj[task] = statusObj.TODO;
}

function deleteTask(task) {
  examination(task);
  if (task in listObj) {
    delete listObj[task];
  } else console.log('Такого задания нет в списке.');
}

function showList () {
  let count;
    console.log(`${statusObj.TODO}:`);
    count = 0;
    for ( let key in listObj ) {
      if (listObj[key] == statusObj.TODO) {
        console.log(`\t${key}`);
        count++;
      }
    }
    if (count===0) console.log(`\t---`);
    
    console.log(`${statusObj.IN_PROGRESS}:`);
    count = 0;
    for ( let key in listObj ) {
      if (listObj[key] == statusObj.IN_PROGRESS) {
        count++;
        console.log(`\t${key}`);
      }
    }
    if (count===0) console.log(`\t---`);
    
    console.log(`${statusObj.DONE}:`);
    count = 0;
    for ( let key in listObj ) {
      if (listObj[key] == statusObj.DONE) {
        count++;
        console.log(`\t${key}`);
      }
    }
    if (count===0) console.log(`\t---`);
}


addTask('lunch');
addTask('lerning');
addTask('runing');
changeStatus('lunch','In Progress');
changeStatus('lerning','Done');
showList();