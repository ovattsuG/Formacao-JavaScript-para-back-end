//codigo sem function 

//var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area)

//const forma = 'triângulo';
//const altura = 5;
//const comprimento = 7;
//let area;

//if (forma === 'quadrado') {
//area = altura * comprimento;
//} else {
//area = (altura * comprimento) / 2;
//}

//console.log(area)


//usando function para fazer o mesmo codigo usado acima 

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;

const calculaArea = (forma) => {
  if (forma === 'quadrado') {
    area = altura * comprimento;
  } else {
    area = (altura * comprimento) / 2;
  }
  return area;
}

console.log(calculaArea(forma));