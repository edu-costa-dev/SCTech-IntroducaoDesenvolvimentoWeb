function buscandoDadosDoServidor() {
  //CODIGO DE SIMULAÇÃO DE BUSCA DE DADOS NO SERVIDOR.
  return new Promise((resolve, reject) => {
    console.log("Buscando informações do servidor");

    setTimeout(() => {
      let sucesso = Math.random() > 0.5;

      if (sucesso) {
        resolve("Dados recebidos com sucesso");
      } else {
        reject("Falha na optenção de dados do servidor");
      }
    }, 2000);
  });
}

buscandoDadosDoServidor()
.then((mensagem) => {
  console.log(mensagem);
})
.catch((erro) => {
    console.error(erro);
});
