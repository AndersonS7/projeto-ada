const tasks = [];

// Adicionar uma tarefa
function addTask(task) {
    let id = idGenerator(tasks);

    tasks.push({
        id: id,
        desc: task
    });
}

// Editar uma tarefa salva
function updateTask(task) {

}

// Remover uma tarefa salva
function deleteTask(task) {

}

// Listar todas as tarefas salvas
function showTask(tasks) {
    tasks.forEach(item => console.log(`${item.id}: ${item.desc}`))
}

// Obter uma tarefa, através de um parâmetro (id)
function getTask(id) {
    //testar função indexOf do próprio array
    // tasks.find((task) => {
    //     if (task.id == id) {
    //         console.log(task.desc)
    //         return task.desc;
    //     }
    // });
}

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

console.log(getTask(2));

console.log('-----------')
showTask(tasks);
