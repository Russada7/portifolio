let tarefas = [];

const input = document.getElementById("novaTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnTema = document.getElementById("btnTema");
const lista = document.querySelector("#listaTarefas");

function salvarLocalStorage() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarLocalStorage() {
  const dados = localStorage.getItem("tarefas");
  if (dados) {
    tarefas = JSON.parse(dados);
    renderizarTarefas();
  }
}

function renderizarTarefas() {
  lista.innerHTML = "";
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.textContent = tarefa;
    lista.appendChild(li);
  });
}

btnAdicionar.addEventListener("click", () => {
  const nova = input.value.trim();
  if (nova) {
    tarefas.push(nova);
    input.value = "";
    renderizarTarefas();
    salvarLocalStorage();
  }
});

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

carregarLocalStorage();
