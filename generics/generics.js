"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Harrison').length);
console.log(echo(23).length);
console.log(echo({ nome: 'Harry Wells', idade: 36 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Harrison').length);
console.log(echoMelhorado(11));
console.log(echoMelhorado({ nome: 'Harry Wells', idade: 43 }).nome);
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([4, 5, 6]);
imprimir(['Harry Wells', 'Iris West', 'Ralph Dibny']);
imprimir([
    { nome: 'Batman', idade: 22 },
    { nome: 'Superman', idade: 23 },
    { nome: 'WondeWoman', idade: 21 }
]);
imprimir([
    { nome: 'TheFlash', idade: 22 },
    { nome: 'Arrow', idade: 23 },
    { nome: 'SuperGirl', idade: 21 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Somebody help please!!!'));
//# sourceMappingURL=generics.js.map