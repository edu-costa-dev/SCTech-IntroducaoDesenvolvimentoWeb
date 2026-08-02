function clientePedido(numeroPedido){
    if (parseInt(numeroPedido) === 1){
        document.getElementById("resultado").innerHTML = "Pizza Cababresa";
    } else if (parseInt(numeroPedido) === 2){
        document.getElementById("resultado").innerHTML = "Pizza de Quatro Queijos";
    } else if (parseInt(numeroPedido) === 3){
        document.getElementById("resultado").innerHTML = "Pizza de Frango com Catupiry";
    } else if (parseInt(numeroPedido) === 4){
        document.getElementById("resultado").innerHTML = "Pizza de Brigadeiro";
    } else {
        document.getElementById("resultado").innerHTML = "Numero do pedido inválido";
    }
}