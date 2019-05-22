/* ==============Interfaces================ */

/* interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}

let user = { firstName: "Nora", lastName: "West Allen" }

document.body.innerHTML = greeter(user) */


class Data {
  // Público por Padrão
  dia: number
  public mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 2, ano: number = 2147) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 2045)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)


const casamento = new Data // posso omitir os "()"
casamento.ano = 2024
console.log(casamento)


class DateExpert {
  constructor(public dia: number = 24, public mes: number = 5, public ano: number = 1998) {

  }
}

const aniversarioExpert = new DateExpert(3, 12, 1998)
aniversarioExpert.dia = 13
console.log(aniversarioExpert.dia)
console.log(aniversarioExpert)


const casamentoExpert = new DateExpert // posso omitir os "()"
casamentoExpert.ano = 2024
console.log(casamentoExpert)

/*
  Desafio Classes Produto
  Atributos: nome, preço e desconto
  Criar construtor
  Obs 1.: Desconto opcinal (valor padrão 0)
  Obs 2.: Criar dois produtos: passando dois a três params
*/

class Produto {

  constructor(public nome: string, public preco: number, public desconto: number = 0) {

  }

  // tbm é public
  precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
  }

}

let prod1 = new Produto('Mercedes c180', 4.20)
prod1.desconto = 0.05
console.log(prod1.resumo())

let prod2 = new Produto('BMW 320i', 8.80, 0.15)
console.log(prod2.resumo())

/* ==================================================================================================== */
class Motos {
  constructor(public nome: string = 'XRE', public preco: number = 35000, public desconto: string = '25%') {

  }
}

const moto1 = new Motos('CBX500', 25000, '25%')
moto1.desconto = '10%'
console.log(moto1.desconto)
// console.log(moto)


const moto2 = new Motos
moto2.desconto = '5%'
console.log(moto2)

/* ======================================================================================== */
class Carro {
  private currentSpeed: number = 0

  constructor(public marca: string, public modelo: string, private speedMax: number = 200) {

  }

  protected changeSpeed(delta: number): number {
    const againSpeed = this.currentSpeed + delta
    const speedValid = againSpeed >= 0
      && againSpeed <= this.speedMax

    if (speedValid) {
      this.currentSpeed = againSpeed
    } else {
      this.currentSpeed = delta > 0 ? this.speedMax : 0
    }

    return this.currentSpeed
  }

  public speedUP(): number {
    return this.changeSpeed(5)
  }

  public brake(): number {
    return this.changeSpeed(-5)
  }
}

const carro1 = new Carro('BMW', '320i', 210)

Array(50).fill(0).forEach(() => carro1.speedUP())
console.log(carro1.speedUP())

Array(45).fill(0).forEach(() => carro1.brake())
console.log(carro1.brake())

// simular "erros"
/* carro1.currentSpeed = 300
console.log('current -> ' + carro1.currentSpeed)

carro1.speedMax = 500
console.log('maximun -> ' + carro1.speedMax)

carro1.changeSpeed(150)
console.log('current -> ' + carro1.currentSpeed) */


/* Herança */
class Mitsubishi extends Carro {

  constructor(modelo: string, speedMaximum: number) {
    super('Mitsubishi', modelo, speedMaximum)
    // ...
  }

  public speedUP(): number {
    return this.changeSpeed(20)
  }
  public brake(): number {
    return this.changeSpeed(-15)
  }
}

const c180 = new Mitsubishi('c180', 320)
console.log(`${c180.marca} ${c180.modelo}`)
console.log(c180.speedUP())
console.log(c180.speedUP())
console.log(c180.speedUP())
console.log(c180.brake())
console.log(c180.brake())

// Getters & Setters
class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e Métodos estáticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

/* const m1 = new Matematica()
m1.PI = 4.2
console.log(m1.areaCirc(4)) */

console.log(Matematica.areaCirc(4))

/* Classes Abstrata */
abstract class Calculo {
  protected resultado: number = 0

  abstract excecutar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  excecutar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a)
  }
}

class Multiplicacao extends Calculo {
  excecutar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a)
  }
}

let c1: Calculo = new Soma()
c1.excecutar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.excecutar(2, 3, 4, 5)
console.log(c1.getResultado())


class Unico {
  private static instance: Unico = new Unico
  private constructor() { }

  static getInstance(): Unico {
    return Unico.instance
  }

  agora() {
    return new Date
  }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora())


/* ====Somente Leitura==== */
class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
/* turboHelice.modelo = 'DC-8'
turboHelice.prefixo = 'PT-DEF' */
console.log(turboHelice)
