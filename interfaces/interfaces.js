"use strict";
function saudarComOla(pessoa) {
    console.log('Hello, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Barry';
}
const pessoa = {
    nome: 'Ralph',
    idade: 22,
    saudar(sobrenome) {
        console.log('Hello, my name is ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Ralph', idade: 21, altura: 1.75 })
pessoa.saudar('Allen');
// Usando Classe...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Hello, my name is ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Eobard';
saudarComOla(meuCliente);
meuCliente.saudar('Thawne');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstraçãoABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 13;
const y = 16;
const z = 12;
x.log();
y.log();
z.log();
const cli = { nome: 'Wally', toString() { return this.nome; } };
cli.log();
//# sourceMappingURL=interfaces.js.map