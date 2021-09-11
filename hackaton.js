// EJERCICIO #0
// Filtrar miembros únicos del arreglo
// Sea arr una matriz.
// Cree una función única (arr) que debería devolver una matriz con elementos únicos de arr.
// Por ejemplo:
// function unique(arr) { /* your code */}

const unique = (arr) => {
    return [...new Set(arr)];
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]
console.log(unique(values));


// EJERCICIO # 1
// Filtrar anagramas
// Los anagramas son palabras que tienen el mismo número de letras iguales, pero en diferente orden.
// Por ejemplo:
// nap - panear - are - eracheaters - hectares - teachers
// Escriba una función aclean (arr) que devuelva una matriz limpia de anagramas.

const aclean = (arr) => {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        console.log(sorted)
        map.set(sorted, word); // map.set() prototype updates the value of the key if it already exists
    }
    return [...map.values()];
}

// Por ejemplo:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"


// EJERCICIO #2
// Claves iterables
// Nos gustaría obtener un arreglo de map.keys() en una variable y luego aplicarle métodos específicos
// de la matriz, p. Ej. .push(). Pero eso no funciona:

let map = new Map();
map.set("name", "John")
let keys = map.keys();

// keys.push("more") // ¿Por qué falla? 
console.log("falla porque push() no es un metodo de keys")

// ¿Cómo podemos arreglar el código para que funcione keys.push?
console.log("Es necesario crear el método push() para keys")
keys.push = (key) => {
    map.set(key, undefined);
}

keys.push("more")
console.log(map)


// EJERCICIO #3
// Valor del último bucle
// Cuál es el último valor alertado por este código? ¿Por qué?
let i = 3;
while (i) {
    console.log(i--);
}

console.log("El ultimo valor alertado es 1, porque el iterador va decreciendo en 1 hasta llegar a 0 que es equivalente a false")


// EJERCICIO #4

// ¿Qué valores muestra el ciclo while?
// Para cada iteración del ciclo, escriba qué valor genera y luego compárelo con la solución
// La forma de prefijo ++ i:
let m = 0;
while (++m < 5) console.log(m); // 1, 2, 3, 4

// La forma sufijo i ++
let n = 0;
while (n++ < 5) console.log(n); // 1, 2, 3, 4, 5

// Ambos bucles alert sobre los mismos valores, ¿o no?
console.log("NO son iguales, i++ incrementa y devuelve el valor incrementado, ++i incrementa pero devuelve el valor anterior")


// EJERCICIO #5
// Reescribir con funciones de flecha
// Reemplace las expresiones de función con funciones de flecha en el siguiente código:
function ask(question, yes, no) {
    if (question) yes();
    else no();
}
// ask(
//     "Do you agree?",
//     function () {
//         alert("You agreed.");
//     },
//     function () {
//         alert("You canceled the execution.");
//     }
// );

yes = () => {
    console.log("You agreed.")
}
no = () => {
    console.log("You canceled the execution")
}
ask("Do you agree?", yes, no)


// EJERCICIO #6
// Establecer y disminuir para contador
// Modifique el código de makeCounter () para que el contador también pueda disminuir y establecer
// el número:
// - counter () debe devolver el siguiente número (como antes).
// - counter.set (value) debe establecer el contador en valor.
// - counter.decrease () debería disminuir el contador en 1.
// Consulte el código de la zona de pruebas para ver el ejemplo de uso completo.
// PD Puede utilizar una propiedad de cierre o de función para mantener el recuento actual. O escribe
// ambas variantes.

const makeCounter = () => {
    let count = 0;

    function counter() {
        return count++;
    }
    counter.set = (value) => {
        return count = value;
    };
    counter.decrease = () => {
        return count--;
    }
    return counter;
}

let counter = makeCounter()
console.log(counter())
console.log(counter.set(10))
console.log(counter.decrease())


// EJERCICIO #7
// Repita hasta que la entrada sea correcta
// Escriba un bucle que solicite un número mayor que 100.
// Si el visitante ingresa otro número, pídale que ingrese nuevamente.
// El bucle debe solicitar un número hasta que el visitante ingrese un número mayor que 100 o cancele
// la entrada / ingrese una línea vacía.
// Aquí podemos asumir que el visitante solo ingresa números.
// No es necesario implementar un manejo especial para una entrada no numérica en esta tarea.


const askNumber = () => {
    const message = "Ingrese un número mayor que 100"
    let number = prompt(message);
    while (number < 100) {
        const paramNull = number === null; // if param is null
        const paramNaN = isNaN(Number(number)); // if param is not a number
        const paramStringEmpty = number === ""; // if param is empty string
        if (paramNull || paramNaN || paramStringEmpty) {
            break;
        }
        number = prompt(message);
        number = Number(number)
        console.log(number)
    }
}

askNumber();


// EJERCICIO #8
// Salida de una lista de un solo enlace
// Supongamos que tenemos una lista con un solo enlace (como se describe en el capítulo Recurrencia y pila):
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// Escriba una función printList (lista) que genere los elementos de la lista uno por uno.
// Haz dos variantes de la solución: usando un bucle y usando la recursividad.

const printList = (list) => {
    let current = list;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

const printListRecursive = (list) => {
    if (list) {
        console.log(list.value);
        printListRecursive(list.next);
    }
}

printList(list);
printListRecursive(list);

// ¿Qué es mejor: con recursividad o sin ella?
console.log("la función recursiva es más simple y minimalista")