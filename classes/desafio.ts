// Exercício 1 - Classe
class Moto {
  public velocidade: number = 0

  constructor(public nome: string) {

  }

  buzinar() {
    console.log('Toooooooot!')
  }

  acelera(delta: number) {
    this.velocidade = this.velocidade + delta
  }
}

const moto = new Moto('Fazer')
moto.buzinar()
console.log(moto.velocidade)
moto.acelera(35)
console.log(moto.velocidade)

// Exercício 2 - Herança
abstract class Objeto2D {

  constructor(public base: number = 0, public altura: number = 0) {

  }

  abstract area(): number
}

class Retangulo extends Objeto2D {
  area(): number {
    return this.base * this.altura
  }
}

const retangulo = new Retangulo(5, 7)
retangulo.base = 10
// retangulo.altura = 7
console.log(retangulo.area())

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = ''

  get primeiroNome(): string {
    return this.primeiroNome
  }

  set primeiroNome(valor) {
    if (valor.length >= 3) {
      this._primeiroNome = valor
    } else {
      this._primeiroNome = ''
    }
  }

}

const estagiario1 = new Estagiario
estagiario1.primeiroNome = 'We'
console.log(estagiario1.primeiroNome)

estagiario1.primeiroNome = 'Weslley'
console.log(estagiario1.primeiroNome)
