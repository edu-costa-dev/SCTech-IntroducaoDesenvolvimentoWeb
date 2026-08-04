console.log("Inicio. ")
const produtos = [
    {id:1, nome:"Camiseta",preco:25.99},
    {id:2, nome:"Calça",preco:39.99},
    {id:3, nome:"Tênis",preco:299.90},
];

function carregaProduto(id){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
      const produtoEncontrado = produtos.find(p => p.id === id);

      if (produtoEncontrado) {
        resolve(produtoEncontrado);
      } else {
        reject(new Error("Falha na optenção de dados do servidor"));
      }
    }, 2000);
    })
}

carregaProduto(1)
.then(produto => {
    try {
        const produtoJson = JSON.stringify(produto);
        console.log("Produto em formato JSON: ",produtoJson);

        const produtoObjeto = JSON.parse(produtoJson);
        console.log("Produto convertido de volta para Objeto: ", produtoObjeto)
    } catch (erroJson) {
        console.error("Erro ao processar JSON no .then(): ", erroJson.message);
    }
})
.catch(erro => {
    console.error("Erro na busca do produto: ",erro.message)
})

async function buscarEProcessarProduto(id) {
    try {
        const produto = await carregaProduto(id);

        const produtoJSON = JSON.stringify(produto);
        console.log("[Async/Await] Produto em JSON: ", produtoJSON);

        const produtoObjeto = JSON.parse(produtoJSON);
        console.log("[Async/Await] Objeto Revertido: ",produtoObjeto);

        return produtoObjeto;
    }
    catch (erro){
        console.error("[Async/Await] Ocorreu um erro: ",erro.message);
    }
}

buscarEProcessarProduto(1);
buscarEProcessarProduto(2);
buscarEProcessarProduto(3);
buscarEProcessarProduto(99);