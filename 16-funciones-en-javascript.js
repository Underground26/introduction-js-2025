//Funciones en JS
//Hoisting : Es el comportamiento por defecto en el que el interprete mueve las declaraciones (variables y funciones)
//a la parte superior de su ambito (scope) antes de ejcutar el codigo


// Declaracion de una función

// function add(){
//     console.log(10 + 20);
// }
// add();

// //La exptresion de la funcion
// const add2 = function(){
//     console.log (30 + 40);
    
// }
// add2();

// Function IIFE, esta funcion se invoca a si misma 
(function(){
    console.log("Esto es una funcion IIFE")
})();

// console.log(client);

//Diferencias entre function y Metodo

const num1 = 20;
const num2 = "20";

// console.log(num1);
// console.log(num2);

// console.log(parseInt(num2));
// console.log(num2);

//Un metodo siempre colocamos una variable y despues un punto
//Metodo que convierte de numero a String 
console.log(num1.toString());
