/* Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variáveis, sendo elas:
1 - Preço do Combistivel; 5,00
2 - Gasto médio de comb. do carro por km; 
3 - Distância em KM da viagem;

*/
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;


    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoCombustivel;

    console.log(valorGasto.toFixed(2));


