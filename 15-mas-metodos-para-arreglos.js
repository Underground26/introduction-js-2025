//Metodos para arreglos

// Crear un arreglo de objetos para un carrito de compras 
const months = ["December", "Noviembre", "January", "Febrary"];



const shoppingCart = [
    {productName : 'Tablet', price: 800000},
    {productName : 'Mouse', price: 50000},
    {productName : 'Computer', price: 2000000},
    {productName : 'smart TV', price: 1500000},
    {productName : 'Play Station', price: 1800000},
    {productName : 'X-box', price: 1800000},
    {productName : 'Nintendo WII', price: 900000},
    {productName : 'Keyboard', price: 400000},
    {productName : 'Sound-bar', price: 700000},
];

// months.forEach(function(month){
//     if (month == 'January'){
//         console.log("January si existe");
//     }
//     else{
//         console.log(month);
//     }
//      console.log(month);
// })

// El include no funciona cuando tenemos objetos dentro del array 
// const product = shoppingCart.includes('tablet')

//En conclusion para arreglos planos usamos includes y para objetos some
// const result = shoppingCart.some(function(product){
//     return product.productName === 'Mouse';
// })


// const result = shoppingCart.some(product => product.productName === 'Tablet');


//El metodo nos sirve para realizar la sumatoria de los precios
// const result = shoppingCart.reduce(function(total, product){
//     return total + product.price
// },0);
//  console.log(result);

// // 77funcion flecha 
// const result = shoppingCart.reduce((total, product) => total + product.price, 0);
// console.log(result);


//Metodo Filter

// const result = shoppingCart.filter(function(product){
//     return product.price >1000000;
// })

//Arrow function

// const result = shoppingCart.filter(product => product.price > 1000000);
// console.log(result)


const result = shoppingCart.filter(function(product){
    return product.productName === 'Sound-bar';
})

console.log(result);

const result2 = shoppingCart.filter(function(product){
    return product.productName  != 'Sound-bar';
})
console.log(result2);
