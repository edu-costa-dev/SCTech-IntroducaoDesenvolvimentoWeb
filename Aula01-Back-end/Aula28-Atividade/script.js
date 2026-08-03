
  function validaForm() {
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;

    if (email === '' || telefone === '' || senha === ''){
        alert('Insira informação em todos os campos');
        return false;
    }

    if (email.length < 3 || email.length > 150){
        alert('Email deve conter mais que 3 e menos de 150 caracateres');
        return false;
    }

    if (senha.length <6){
        alert('Senha deve ter mais de 6 caracteres.');
        return false;
    }

    const emailPatern = /^(([A-Za-z0-9-_+]+(?:\.[A-Za-z0-9-_]+)*)@([A-Za-z0-9-]+(?:\.[A-Za-z0-9]+)*(?:\.[A-Za-z]{2,})))$/;
    if (!emailPatern.test(email)){
        alert("Insina um valor de email valido.")
        return false;
    }
    return true;
}

document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    if (validaForm())
    {
        alert("Formulario Validado");
    }
})
