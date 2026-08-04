class Produto {
  constructor(nomeP, preco) {
    this.nomeP = nomeP;
    this.preco = preco;
  }
  mostraDetalhes() {
    console.log(
      `O produto: ${this.nomeP} que custa: R$ ${this.preco}.`,
    );
  }
}

class Eletronico extends Produto {
  constructor(nomeP, preco, garantia) {
    super(nomeP, preco);
    this.garantia = garantia;
  }

  mostraDetalhes() {
    console.log(
      `O produto: ${this.nomeP} que custa: R$ ${this.preco}, está ${this.garantia}!`,
    );
  }
}

const visualizaProduto = new Eletronico("iPhone 16",2999.0,`Dentro da Garantia!`,);
visualizaProduto.mostraDetalhes();
const visualizaProduto2 = new Produto("Gel",19.90)
visualizaProduto2.mostraDetalhes();

