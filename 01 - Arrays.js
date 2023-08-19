const pushFruits = ["apple", "banana", "orange"];
pushFruits.push("grape");
//La función push() agrega el elemento pasado como argumento al final del arreglo.
// Output: ['apple', 'banana', 'orange', 'grape']

const popFruits = ["apple", "banana", "orange"];
const removedpopFruit = popFruits.pop();
//La función pop() elimina el último elemento del arreglo y lo devuelve.
// Output: removedFruit = 'orange', fruits = ['apple', 'banana']

const unshiftFruits = ["apple", "banana", "orange"];
unshiftFruits.unshift("grape");
//La función unshift() agrega el elemento pasado como argumento al principio del arreglo.
// Output: ['grape', 'apple', 'banana', 'orange']

const shiftFruits = ["apple", "banana", "orange"];
const removedshiftFruit = shiftFruits.shift();
//La función shift() elimina el primer elemento del arreglo y lo devuelve.
// Output: removedFruit = 'apple', fruits = ['banana', 'orange']

const spliceFruits = ["apple", "banana", "orange"];
const removedSpliceFruits = spliceFruits.splice(1, 2, "grape", "watermelon");
//La función splice() puede eliminar elementos y/o agregar nuevos elementos en la posición especificada del arreglo.
// Output: removedFruits = ['banana', 'orange'], fruits = ['apple', 'grape', 'watermelon']

const sliceFruits = ["apple", "banana", "orange", "grape"];
const slicedFruits = sliceFruits.slice(1, 3);
//La función slice() devuelve una copia superficial de una porción del arreglo, desde el índice de inicio (incluido) hasta el índice de fin (excluido).
// Output: slicedFruits = ['banana', 'orange']

const concatFruits = ["apple", "banana"];
const moreFruits = ["orange", "grape"];
const allFruits = concatFruits.concat(moreFruits);
//La función concat() combina dos o más arreglos creando un nuevo arreglo resultante.
// Output: ['apple', 'banana', 'orange', 'grape']

const joinFruits = ["apple", "banana", "orange"];
const joinedString = joinFruits.join(", ");
//La función join() convierte los elementos del arreglo en una cadena, separados por el delimitador especificado.
// Output: 'apple, banana, orange'

const indexOf_Fruits = ["apple", "banana", "orange"];
const index = indexOf_Fruits.indexOf("banana");
//La función indexOf() devuelve el índice del primer elemento que coincide con el valor especificado o -1 si no lo encuentra.
// Output: index = 1

const lasIndexOf_Fruits = ["apple", "banana", "orange", "banana"];
const lastIndex = fruits.lastIndexOf("banana");
//La función lastIndexOf() devuelve el índice del último elemento que coincide con el valor especificado o -1 si no lo encuentra.
// Output: lastIndex = 3

const findNumbers = [10, 20, 30, 40, 50];
const foundNumber = findNumbers.find((num) => num > 30);
//La función find() devuelve el valor del primer elemento del arreglo que cumple con la función de prueba proporcionada.
// Output: foundNumber = 40

const findIndexNumbers = [10, 20, 30, 40, 50];
const foundIndex = findIndexNumbers.findIndex((num) => num > 30);
//La función findIndex() devuelve el índice del primer elemento del arreglo que cumple con la función de prueba proporcionada.
// Output: foundIndex = 3

const filterNumbers = [10, 20, 30, 40, 50];
const filteredNumbers = filterNumbers.filter((num) => num > 30);
//La función filter() crea un nuevo arreglo con todos los elementos que pasan la prueba implementada por la función proporcionada.
// Output: filteredNumbers = [40, 50]

const mapNumbers = [1, 2, 3, 4, 5];
const squaredNumbers = mapNumbers.map((num) => num * num);
//La función map() crea un nuevo arreglo con los resultados de la función proporcionada aplicada a cada elemento del arreglo.
// Output: squaredNumbers = [1, 4, 9, 16, 25]

const reduceNumbers = [1, 2, 3, 4, 5];
const sum = reduceNumbers.reduce((acc, num) => acc + num, 0);
//La función reduce() aplica una función acumulativa a cada elemento del arreglo, de izquierda a derecha, para reducirlo a un único valor.
// Output: sum = 15

const reverseFruits = ["apple", "banana", "orange"];
const reversedFruits = reverseFruits.reverse();
//La función reverse() invierte el orden de los elementos en el arreglo.
// Output: reversedFruits = ['orange', 'banana', 'apple']

const sortFruits = ["orange", "banana", "apple"];
const sortedFruits = sortFruits.sort();
//La función sort() ordena los elementos del arreglo (por defecto, en orden lexicográfico/alfabético). 
//Puedes proporcionar una función de comparación personalizada si necesitas ordenar según criterios específicos.
// Output: sortedFruits = ['apple', 'banana', 'orange']

const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));
//La función forEach() ejecuta una función proporcionada una vez para cada elemento del arreglo.
// Output: 'apple', 'banana', 'orange'

const includesFruits = ["apple", "banana", "orange"];
const hasBanana = includesFruits.includes("banana");
//La función includes() determina si el arreglo incluye un valor específico y devuelve true o false en consecuencia.
// Output: hasBanana = true

const everyNumbers = [10, 20, 30, 40, 50];
const allGreaterThanZero = everyNumbers.every((num) => num > 0);
//La función every() comprueba si todos los elementos del arreglo cumplen con la función de prueba proporcionada.
// Output: allGreaterThanZero = true

const someNumbers = [10, 20, 30, 40, 50];
const hasEvenNumber = someNumbers.some((num) => num % 2 === 0);
//La función some() comprueba si al menos un elemento del arreglo cumple con la función de prueba proporcionada.
// Output: hasEvenNumber = true

//eso es todo hasta aquí