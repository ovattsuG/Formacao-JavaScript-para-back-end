//1)declara a função

function imprimirTexto(texto) {
    console.log(texto)
 }

 //2) executa a função uma ou mais vezes 
 imprimirTexto("Olá mundo")

 //três formas de escrever funções

 function soma() {
    return 2 + 2;
 }

 console.log(soma())

 //posso usar uma função dentro de outra 
 imprimirTexto(soma())

