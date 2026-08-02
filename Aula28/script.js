function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
  }

  if (nome.length < 3 || nome.length > 50) {
    alert("O nome deve ter entre 3 e 50 caracteres.");
    return false;
  }

  if (email.length < 5 || email.length > 50) {
    alert("O email deve ter entre 5 e 50 caracteres.");
    return false;
  }

  const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPatern.test(email)) {
    alert("Por favor, insira um email válido.");
    return false;
  }

  return true;
}

document
  .getElementById("formularioContato")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarFormulario()) {
      alert("Formulário validado com sucesso!");
    }
  });
