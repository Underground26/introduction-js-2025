// Metodos para arreglos
const numbers = [2, 5, 8, 23, 56];

// Agregar elementos a mi arreglo, pero se requiere conocer la longitud del
// arreglo

numbers[5] = 100;

// Agregar elementos al final del arreglo
numbers.push(1000, 500);

// Metodo para agregar elementos al inicio del arreglo
numbers.unshift(-2, -1, 0);

//Elimina el ultimo elemento del arreglo
numbers.pop();

//Elimina el primer elemento del arreglo
numbers.shift();

// elimina todos elementos a partir del indice asignado
numbers.splice(3);
console.table(numbers);


const fruits = ("apple", "lemon", "pineapple", "watermelon", "orange");

// agregar una fruta
fruits.push("blackberry");

// Mostar los 3 primeros
console.table(fruits[0],[1],[2]);

// Recorrer un arreglo con For
const colors = ["Red", "Blue", "Green"];
for (let i=0; i < colors.length; i++){
    console.log(colors[i]);
}

// Recorrer un arreglo con forEach
const animals = ["Tiger", "Cat", "Dog", "Hours"];
animals.forEach((animal) => {
    console.log(animal);
})

// Map para transformar
const numbers = [1, 2, 3, 4];
const  squares = numbers.map(num => num * num);
console.log(squares);

