const carros = ["Fiat", "BMW", "VW", "Ford", "Renault"];
const conteudo = document.getElementById("conteudo");
var contador = 0;
var continuar = true;

do {
    // 1. Atualiza o HTML com o carro atual
    const p = document.createElement("p");
    p.textContent = carros[contador];
    conteudo.appendChild(p);

    console.log("Carro Atual: " + carros[contador]);

    // 2. Prepara para o próximo carro
    contador++;

    // 3. Se ainda houver um próximo carro na lista, pede confirmação ANTES da próxima iteração
    if (contador < carros.length) {
        continuar = confirm("Deseja exibir o próximo carro (" + carros[contador] + ")?");
    } else {
        alert("Você chegou ao fim da lista!");
        continuar = false;
    }

} while (continuar && contador < carros.length);