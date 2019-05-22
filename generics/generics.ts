function echo(objeto: any) {
  return objeto
}

console.log(echo('Harrison').length)
console.log(echo(23).length)
console.log(echo({ nome: 'Harry Wells', idade: 36 }))

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
  return objeto
}

console.log(echoMelhorado('Harrison').length)
console.log(echoMelhorado<number>(11))
console.log(echoMelhorado({ nome: 'Harry Wells', idade: 43 }).nome)

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([4, 5, 6])
imprimir<string>(['Harry Wells', 'Iris West', 'Ralph Dibny'])
imprimir<{ nome: string, idade: number }>([
  { nome: 'Batman', idade: 22 },
  { nome: 'Superman', idade: 23 },
  { nome: 'WondeWoman', idade: 21 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
  { nome: 'TheFlash', idade: 22 },
  { nome: 'Arrow', idade: 23 },
  { nome: 'SuperGirl', idade: 21 }
])

// Tipos Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Somebody help please!!!'))


