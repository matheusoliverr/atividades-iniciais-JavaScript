//Cálculo de IMC utilizando peso e altura

const name = "Carlos";
const peso = 110;
const altura = 1.88;

const imc = peso/(altura*altura)

if (imc >= 30) {
    console.log(`${name} você está acima do peso.`)
}
else{
    console.log(`${name} você não está acima do peso.`)
}
