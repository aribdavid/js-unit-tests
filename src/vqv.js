/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (personName, personAge) => {
  if (typeof (personName) === 'undefined' || typeof (personAge) === 'undefined') {
    return undefined;
  } 
    let greeting = `Oi, meu nome é ${personName}!\n`;
    greeting += `Tenho ${personAge} anos,\n`;
    greeting += 'trabalho na Trybe e mando muito em programação!\n';
    greeting += '#VQV!';
    return greeting;
};

console.log(vqv('Tunico', 29));
module.exports = vqv;
