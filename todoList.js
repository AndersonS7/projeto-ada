let tasks = [];

function addTask(task) {
    let id = idGenerator(tasks);

    tasks.push({
        id: id,
        desc: task
    });
}

function updateTask(id, novaDesc) {
    return tasks.map(task => {
        if (task.id === id) {
            task.desc = novaDesc;
        }
        return task;
    });
}

function deleteTask(id) {
    let index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    return tasks;
}

function showTask(tasks) {
    tasks.forEach(item => console.log(`${item.id}: ${item.desc}`))
}

function getTask(id) {
    return tasks.filter(task => {
        if (task.id == id) {
            return task;
        }
    });
}

//-----
function idGenerator(tasks) {
    let id = null;

    if (tasks.length > 0) {
        tasks.reverse();
        id = tasks[0].id + 1;
        tasks.reverse();
        return id;
    }

    return 0;
}

addTask('Comprar ovo com bacon');
addTask('Estudar para a prova');
addTask('Comprar leite com pão');
addTask('Comprar comida pro cachorro');

// console.log(getTask(2));
// console.log('-----------')

showTask(tasks);
console.log('-----------')

deleteTask(2);

showTask(tasks);
console.log('-----------')

addTask('Fazer o projeto da Ada Teach');
showTask(tasks);
console.log('-----------')

updateTask(4, 'Fazer o projeto da Ada e subir na plataforma')
showTask(tasks);
console.log('-----------');