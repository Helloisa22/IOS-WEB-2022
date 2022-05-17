// AQUI SERÁ CRIADO UM EXERCICIO ARRAYS DE OBJETOS

const alunos = [
    {
       nome: 'Ana',
       idade: 16,
       nota: 1,
       ano: '2°B'
    },
    {
        nome: 'Bruno',
        idade: 16,
        nota: 1,
        ano: '2°C'
     },
     {
        nome: 'Veronica',
        idade: 16,
        nota: 1,
        ano: '2°C'
     },
     {
        nome: 'Marta',
        idade: 16,
        nota: 1,
        ano: '3°C'
     },
     {
        nome: 'Brenno',
        idade: 16,
        nota: 1,
        ano: '3°C'
     },
     {
        nome: 'Maria',
        idade: 16,
        nota: 1,
        ano: '1°F'
     }
]

// Retorne somente o nome e o ano dos alunos
// let teste = alunos.map((valor) =>{
//     return [valor.ano, valor.nome]
// })
// console.log(teste);


// Retorne apenas os alunos do segundo ano



// Faça a soma de todas as notas dos alunos e retorne a media informando se os alunos ficaram acima da media que é 7
function media(){
    var valorInicial = 0;
    var defineMedia = 0;
    var soma = alunos.reduce((acumulador, valorAtual) => acumulador + valorAtual.nota, valorInicial)

    defineMedia = soma / 6;

    if(defineMedia > 7){
        return `Acima da media`
    }else{
        return `Abaixo da media`
    }
}

console.log(media());



//Tenho que fazer depois
// let teste2 = alunos.map((valor)=>{
    
//     var recebe = valor.nota;

    

//     return soma
// })

