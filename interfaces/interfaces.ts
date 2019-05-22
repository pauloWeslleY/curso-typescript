interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log('Hello, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Barry'
}

const pessoa: Humano = {
  nome: 'Ralph',
  idade: 22,
  saudar(sobrenome: string) {
    console.log('Hello, my name is ' + this.nome + ' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Ralph', idade: 21, altura: 1.75 })
pessoa.saudar('Allen')


// Usando Classe...
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string) {
    console.log('Hello, my name is ' + this.nome + ' ' + sobrenome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Eobard'
saudarComOla(meuCliente)
meuCliente.saudar('Thawne')
console.log(meuCliente.ultimaCompra)


// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function (base: number, exp: number): number {
  return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)

// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void { }
}

class RealAB implements A, B {
  a(): void { }
  b(): void { }
}

class RealABC implements ABC {
  a(): void { }
  b(): void { }
  c(): void { }
}
abstract class AbstraçãoABD implements A, B {
  a(): void { }
  b(): void { }
  abstract c(): void
}

/* =============== */
interface Object {
  log(): void
}

Object.prototype.log = function () {
  console.log(this.toString())
}

const x = 13
const y = 16
const z = 12

x.log()
y.log()
z.log()

const cli = { nome: 'Wally', toString() { return this.nome } }
cli.log()