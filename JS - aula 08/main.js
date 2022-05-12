// Tabuada utilizando wile
function tabuada(){
    var contador = 0;
    var valorMult = 2;
    console.log(`O resultad da tabuada do ${valorMult} é: `)
    while(contador <= 10){
        console.log(`${valorMult} x ${contador} = ${valorMult * contador}`)
        contador++;
    }
}

console.log(tabuada())