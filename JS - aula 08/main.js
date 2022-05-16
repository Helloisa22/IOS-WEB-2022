// Tabuada utilizando wile
// function tabuada(){
//     var contador = 0;
//     var valorMult = 2;
//     console.log(`O resultad da tabuada do ${valorMult} é: `)
//     while(contador <= 10){
//         console.log(`${valorMult} x ${contador} = ${valorMult * contador}`)
//         contador++;
//     }
// }

// console.log(tabuada())

// Array de objetos e laços
console.clear();
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];
// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}
