// Resolução de exercicios para aula de logica de programação parte 2
    /*1) Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
    A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
    valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados
    nas variáveis*/

    var valorA = 10, valorB = 20;
    var valorC;
    valorC = valorA
    valorA = valorB
    valorB = valorC
    console.log(`O valor de A é: ${valorA} E o valor de B é:  ${valorB}`);

    console.clear();
    /*6) Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
    área do retângulo.  para saber a rea de um retangulo basta calcula A=b⋅h*/
    var altura = 10, base = 20, areaRetangulo;
    areaRetangulo = base * altura;
    console.log(`A área de um retângulo é: ${areaRetangulo}`);

    /*10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
    distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
    seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
    calcular e escrever o custo final ao consumidor. */
    var custoFabrica = 1200, percentualDistribuidor = 28, imposto = 45, totalPorcentagem = 0, 
    valorAdicional = 0, custoFinal = 0;

    totalPorcentagem = percentualDistribuidor + imposto;
    valorAdicional = custoFabrica * totalPorcentagem / 100;
    custoFinal = custoFabrica + valorAdicional;
    console.log(`O custo final do automovel para o consumidor é: ${custoFinal}`);

    /*12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
    correspondente em graus Celsius (baseado na fórmula abaixo):  
        C         F - 32
    ---------- = -----------
        5           9*/
    var fahrenheit = 212, celsius = 0, resultadoFinal = 0;
    celsius = (fahrenheit - 32) / 1.8;
    console.log(`A conversão de ${fahrenheit} fahrenheit para Celsius é: ${celsius}`)

    /*13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
    Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
    final é:
                                n1 * 2 + n2 * 3 + n3 * 5
                mediafinal = -----------------------------------
                                            10                      */

    var nota1 = 8, nota2 = 6, nota3 = 5, media = 0;
    media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
    console.log(`A media das notas são ${media}`);
