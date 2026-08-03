class Veiculo {
    constructor(fabricante,modelo,ano,tipo,qtdPortas){
        this.fabricante=fabricante;
        this.modelo = modelo;
        this.ano = ano;
        this.tipo=tipo;
        this.qtdPortas=qtdPortas;        
    }

    mostraDadosVeiculo()
    {
        console.log (`${this.fabricante} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.qtdPortas}`)
    }

    mostraModelo() 
    {
        console.log (`O modelo do carro é: ${this.modelo}`)
    }
    acelerar(){
        console.log(`Acelerando...`)
    }

}

class Moto extends Veiculo {
    constructor (fabricante,modelo,ano,cilindradas)
    {
        super(fabricante,modelo,ano)
        this.cilindradas=cilindradas;
    }

    mostraDadosVeiculo()
    {
        console.log(`${this.fabricante} ${this.modelo}, ${this.ano}, ${this.cilindradas} Cilindradas.`)
    }
}

class Carro extends Veiculo{
    constructor(fabricante,modelo,ano,tipo,qtdPortas){
        super(fabricante,modelo,ano,tipo,qtdPortas);
    }

}


const meuCarro = new Carro ("Ford","KA","2008","Sedan",4)
const minhaMoto = new Moto ("Yamaha","FZ250","2008",250)
meuCarro.mostraDadosVeiculo();
minhaMoto.mostraDadosVeiculo();