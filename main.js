const listObj = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
};
function changeStatus(task, status) {
	return Object.assign(listObj, { [task]: status });
}
function addTask(task) {
	return Object.assign(listObj, { [task]: "To Do" });
}
function deleteTask(task) {
	return Object.assign(listObj, delete listObj[task]);
}
function showList() {
	console.log('To Do:' );
	for (let key in listObj) {
		if (listObj[key] === 'To Do') {
			console.log(`\t${key}`)
		}
	}
	console.log('In Progress:' );
	for (let key in listObj) {
		if (listObj[key] == 'In Progress') {
			console.log(`\t${key}`)
		}
	}
	console.log('Done:' );
	for (let key in listObj) {
		if (listObj[key] === 'Done') {
			console.log(`\t${key}`)
		}
	}
}
addTask('lunch');
addTask('lerning');
addTask('runing');
changeStatus('lunch','In Progress')
changeStatus('lerning','Done')
showList();
