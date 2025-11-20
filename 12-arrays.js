// Arreglo de numeros
const number =  [2, 5, 9, 23, 56];

console.table(typeof number);

// Instanciar es el proeso mediante el cual yo creo un objeto a partir de una clase 
const months = new Array("may", "january", "june", "july");

console.table(typeof months);

const userName = "Brahian";

const myArray = ["Hello", userName, 42, true, false, null, {lastName: "Galeano", myjob : "Technician"}, [2999912,2999815]];


console.table(myArray);

// consultar el valor del elemento y su tipo 
console.log(typeof myArray[3]);

// Metodo  lenght para conocer la longitud de un arreglo
console.log("Brahian tu arreglo tiene " + myArray.length + " Elementos ");



//==================================================================================================//

const numbers = [2, 5, 8 ,23, 56]
// iterador con foreach 

numbers.forEach(function(number){
    console.log(number);
})







