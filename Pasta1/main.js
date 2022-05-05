// Criando array unidimensional
const num1 = new Array(10, 3, 5, 7);

//Ou podemos fazer assim
const num2 = [10, 3, 5, 7];
num2[2] = 33;

console.log(num1);
console.log(num2);

// Acessar um array pela posição
console.log(`Primeiro elemento de num1: ${num1[0]}`)
console.log(`Primeiro elemento de num2: ${num2[0]}`)

//Criando array bidimensional
const num3 = [
    [10, 3, 5, 7],
    [11, 4, 6, 8]
]

// Alterando um valor do array
// num3[1] = [22,0, 2, 5];

// acessando elemento dos Arrays
console.log(`Acessando o elemento da primeira linha ${num3[0]}`)
console.log(`Acessando o elemento da primeira linha ${num3[1]}`)

console.clear();

// Metodo em Arrays
let numArray = [22,0, 2, 5]
console.log(typeof numArray)

//Converter de array para string
let numArray2 = numArray.toString();
console.log(typeof numArray2);

console.clear();
//Converter array em String podendo passar qualquer caracter como separador
let teste1 = [22,0, 2, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2);
console.log(typeof teste2);

// Saber o tamanho do Array
console.clear();
let array = [22,0, 2, 5];
console.log(array.length);

//Remover e inserir elementos no array
//pop()
console.clear();
const frutas1 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let x = frutas1.pop(); //pop() remove o último elemento do array
console.log(frutas1);
console.log(x);

//push() insere um elemento no final do array e retorna o tamanho do novo array
// push()
console.clear();
const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('Kiwi'); // y = 5
console.log(frutas2);
console.log(y);

// shift() remove o elemento no início do array
// shift()
console.clear();
const frutas3 = ['Banana', 'Laranja'];
let z = frutas3.shift(); // z = 'Banana'
console.log(frutas3);
console.log(z);

// unshift() insere um elemento no início do array
// unshift()
console.clear();
const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi'); // w = 3
console.log(frutas4);
console.log(w);

// Apagando um elemento em uma posição específica
// delete
console.clear();
const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
delete frutas5[2];
console.log(frutas5);