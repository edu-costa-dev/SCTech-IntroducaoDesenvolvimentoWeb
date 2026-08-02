const tarefaInput = document.getElementById("tarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    const tarefa = tarefaInput.value.trim();
    if (tarefa !== "") {
        const li = document.createElement("li");
        li.textContent = tarefa;
        listaTarefas.appendChild(li);
        tarefaInput.value = "";
    }
}