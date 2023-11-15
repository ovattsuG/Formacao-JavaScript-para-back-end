const notas = [10, 6, 8, 5.5, 10];

notas.pop();
// metodo para remover elemento da lista

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}.`);