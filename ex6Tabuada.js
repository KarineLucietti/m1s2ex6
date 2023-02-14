let contador = 0;
const limite = 10;
let numero = prompt("Digite um número");
let resultado = numero * contador;

do{
    resultado = numero * contador;
    console.log(numero+" x "+contador+ " = "+resultado);
    contador++
}  while (contador<=limite)


