// String

let nome: string = 'Weslley'
console.log(nome)
//nome = 28


// numbers
let idade: number = 27
// idade = 'Anna'
idade = 27.5
console.log(idade)


// boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)


// tipos esplícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = 'idade é 22'


//array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)


// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)
endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
  Verde, // 0
  Cinza = 100, // 1
  Azul = 10,  // 2
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Cinza
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Cinza, Cor.Vermelho)


// any
let carros: any = 'BMW'
console.log(carros)
carros = { marca: 'BMW', ano: 2019 }
console.log(carros)


// funções 
function retornaMeuNome(): string {
  // return minhaIdade
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(5.5, 9))

//  tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo()
// calculo = {}

calculo = multiplicar
console.log(calculo(5, 6))

//  objetos
let usuario: { nome: string, idade: number } = {
  nome: 'Weslley',
  idade: 20
}
console.log(usuario)

// usuario = {}
// usuario = {
//   name: 'West',
//   age: 35
// }

usuario = {
  idade: 31,
  nome: 'Iris',
}
console.log(usuario)


// Desafio
/*
    Cria um objeto Funcionário com:
      - Array de strings com os nomes dos supervisores
      - Função de bater ponto que recebe a hora (número)
        e retorna uma string
          -> Ponto normal (<= 8)
          -> Fora do horário (> 8)
*/
// alias
type Empregados = {
  supervisores: string[]
  baterPonto: (horas: number) => string
}

let funcionario: Empregados = {
  supervisores: ['Wally', 'Joe'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal'
    } else {
      return 'Fora do horáio!'
    }
  }
}

let funcionario2: Empregados = {
  supervisores: ['Barry', 'Iris'],
  baterPonto(horario: number): string {
    if (horario <= 7) {
      return 'No Horário'
    } else {
      return 'Atrasado'
    }
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))


// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true

//  checando tipos
let valor = 13

if (typeof valor === "number") {
  console.log("É um number!")
} else {
  console.log(typeof valor)
}

//  never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 5,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome')
    }
    if (this.preco <= 0) {
      falha('Preco inválido!')
    }
  }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: contato = {
  nome: 'Barry',
  tel1: '9959562790',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'The Future'
console.log(podeSerNulo)


// Excercício

type contaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: contaBancaria = {
  saldo: 3456,
  depositar(valor: number): void {
    this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: contaBancaria,
  contatos: string[]

}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)