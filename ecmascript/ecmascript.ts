// ============let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if (estaFrio) {
  var acao = 'Coloca o casaco!'
  console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '145.531.348-45'
console.log(cpf)

var segredo = 'externo!'
function revelar() {
  var segredo = 'interno'
  console.log(segredo)
}
revelar()
console.log(segredo)

{
  {
    const def = 'def'
    console.log(def)
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log(i)

// ===========Arrow function
const somar = function (n1: number, n2: number): number {
  return n1 + n2
}

console.log(somar(2, 2))

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(15, 145))

const saudacao = () => console.log("Hello World!")
saudacao()

const falarCom = (pessoa: string) => console.log('Hello ' + pessoa)
falarCom('Barry')


// this

let conta = (n2: number, result: string) => n2 + result
console.log(conta(1, 'nada'))

// function normalComThis() {
//   console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis
//   .bind({ nome: 'JoeWest' })
// normalComThisEspecial()


// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecil = arrowComThis.bind({ nome: 'BarryAllen' })
// arrowComThis()

// ==============Parâmetros Padrão===============//
function contagemRegressiva(inicio: number = 5,
  fim: number = inicio - 5): void {
  console.log(inicio)
  while (inicio > fim) {
    inicio--
    console.log(inicio)
  }
  console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(3)

// Rest & Spred
const numbers = [10, 11, 554, -41]
console.log(Math.max(...numbers))

const turmaA: string[] = ['Barry', 'Iris', 'Nora']
const turmaB: string[] = ['JoeWest', ...turmaA, 'Cisco', 'HarrisonWells']
console.log(turmaB)

function retornaArray(...args: number[]): number[] {
  return args
}

const numeros = retornaArray(1, 2, 5, 5, 5, 654, 54)
console.log(numeros)
console.log(retornaArray(...numbers))

// Rest & Spred (Tupla)
const tupla: [number, string, boolean] = [5, 'theFlash', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]} `)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec  1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
  nome: 'SSD 480GB',
  preco: 200,
  caracteres: {
    w: 'Importado'
  }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const { nome: n, preco: p, caracteres: { w } } = item
console.log(n)
console.log(p)
console.log(w)


const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '9'
// const BoaVindas = 'Boa vindas' + usuarioID + 'Notificações' + notificacoes
const BoaVindas = `Boa Vindas ${usuarioID}, Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`
console.log(BoaVindas)
console.log(`${(1 + 1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)



// Desafio
// Exercicio 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// Exercicio 2
const dizerOla = function (nome: string = "Fulano"): void {
  console.log("Ola, " + nome)
}


dizerOla()
dizerOla("Anna")

// Exercicio 3
const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercicio 4
const array: number[] = [55, 20]
array.push(...nums)
console.log(array)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas

console.log(nota1, nota2, nota3)

// Exercicio 6
const cientista = { nomeCientista: "Will", experiencia: 12 }
const { nomeCientista, experiencia } = cientista
console.log(nomeCientista, experiencia)


// Callback
// function esperar3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback('3s depois...')
//   }, 3000)
// }

// esperar3s(function (resultado: string) {
//   console.log(resultado)
// })

// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve('3s depois promise...')
//     }, 3000)
//   })
// }

// esperar3sPromise().then(dado => console.log(dado))

// fetch('https://swapi.co/api/people/1')
//   .then(res => res.json())
//   .then(personagem => personagem.films)
//   .then(films => fetch(films[0]))
//   .then(resFilm => resFilm.json())
//   .then(filme => console.log(filme.title))
//   .catch(res => console.log('Catch!!!'))