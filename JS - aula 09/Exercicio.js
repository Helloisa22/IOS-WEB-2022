// AQUI SERÁ CRIADO UM EXERCICIO COM ARRAY SIMPLES

const simples = [17, 43, 8, 4, 97, 56, 29];

// simples.forEach(parImpar);

// function parImpar(numero) {
//     if (numero % 2 == 0) {
//         console.log(`Impar`);
//     } else {
//         console.log(`Par`);
//     }
// };

// let teste = simples.map(Math.floor)

let teste = simples.filter((valor) =>{
    return valor >= 18;
})

console.log(teste);