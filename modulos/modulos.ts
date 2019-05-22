// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
import { areaCircunferencia as circ } from './circunferencia'
import retangulo from './retangulo'


console.log('Modulos carregados...')
console.log(retangulo(7, 8))
console.log(circ(2))

const { digaOi } = require('./novo')
console.log(digaOi('Joe West'))