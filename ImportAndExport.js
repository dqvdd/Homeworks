A.js

// importar un solo valor
import {x} from './B'
import {a} from './B'

//importar todo
import {x, a} from './B'
import * as obj from  './B'

//importar por defecto
import fn from './B'

//importar funcion y valores
import fn, {x} from './B'

B.js

//modo 1 
export const x = [{expresion}]

//modo 2
const a = {expresion}
export {a}

//modo 3, export por default
const fn =() => {expresion}
export default fn;
