const celulas = document.querySelectorAll(".celula");
let vezDoX = true;
document.getElementById("btnReiniciar").addEventListener("click", iniciarJogo);


function iniciarJogo() {
    celulas.forEach((celula) => {
            celula.textContent = "";
            // quando o usuário clicar em uma célula, a função será chamada apenas uma vez (once=true)
            celula.addEventListener("click", tratarClique, { once: true });
    } );
}


function tratarClique(evento) {
  evento.target.textContent = vezDoX ? "X" : "O";
  vezDoX = !vezDoX;
}

iniciarJogo();