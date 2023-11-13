/* O primeiro desafio será calcular a média das notas de um estudante. Suas notas são:

10
6,5
8
7,5                     */
/* 
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;
let mediaDasNotas = (nota1 + nota2 + nota3 + nota4)/4;
console.log(mediaDasNotas); */


/* Utilizando listas(arrays) */
const notas = [10,6.5,8,7.5]; //<--elementos/itens/valores
// posição      0  1  2  3

let mediaDasNotas = (nota[0] + nota[1] + nota[2] + nota[3])/ notas.length;
console.log(mediaDasNotas);

// array é um conjunto de dados
//length = largura,  define o número de elementos em um determinado array