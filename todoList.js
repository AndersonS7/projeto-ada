let tasks = [];

function addTask(task) {
    let id = idGenerator(tasks);

    tasks.push({
        id: id,
        desc: task
    });
}

function updateTask(id, novaDesc) {
    try {
        if (id == undefined || id == null || isNaN(id))
            throw new Error("O id informado é inválido!");

        return tasks.map(task => {
            if (task.id === id) {
                task.desc = novaDesc;
            }
            return task;
        });
    }
    catch (erro) {
        console.error("Erro: " + erro.message);
    }
}

function deleteTask(id) {

    try {
        if (id == undefined || id == null || isNaN(id))
            throw new Error("O id informado é inválido!");

        let index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
        return tasks;
    }
    catch (erro) {
        console.error("Erro: " + erro.message);
    }

}

function showTask(tasks) {
    tasks.forEach(item => console.log(`${item.id}: ${item.desc}`))
}

function getTask(id) {

    try {
        if (id == undefined || id == null || isNaN(id))
            throw new Error("O id informado é inválido!");

        return tasks.filter(task => {
            if (task.id == id) {
                return task;
            }
        });
    }
    catch (erro) {
        console.error("Erro: " + erro.message);
    }
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

//---- ADD TAREFAS
addTask('Comprar ovo e carne');
addTask('Estudar para a prova');
addTask('Comprar leite com pão');
addTask('Comprar comida pro cachorro');

//console.log(getTask(2));
console.log('----- MOSTRAR LISTA DE TAREFAS -----')
showTask(tasks);

console.log('')

console.log('----- PEGER TAREFA POR ID -----')
console.log(getTask(2));

console.log('')

console.log('----- DELETAR TAREFA -----')
deleteTask(2);
showTask(tasks);

console.log('')

console.log('----- ADD NOVA TAREFA -----')
addTask('Fazer o projeto da Ada Teach');
showTask(tasks);

console.log('')

console.log('----- ATUALIZAR TAREFA -----')
updateTask(0, 'Editado.....')
showTask(tasks);
