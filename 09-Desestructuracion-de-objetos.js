// Desestructuracion de objetos en JS
// ¿Que es la desestructuracion de objetos?
// En JS es una forma de extraer los valores de un objeto y asignarlo a variables de manera directa y mas sencilla
const person = {
    userName : "Brahian",
    age : 21,
}

console.log(person);

// Variables o claves son por defecto 
// Desestructuracion
const {userName, age} = person;


// Desestructuracion con renombramiento de variables 
const {userName :personName, age : personAge } = person;

console.log(personName);
console.log(personAge);

// Entonces la destructuracion No solo simplifica el acceso a propiedades, si no que tambien permite renombrar variables segun se ncesite}

const people = person.userName;

console.log(people);

// Ejemplo de extraccion de datos de respuesta de API 

const respons = {
    responsStatus : 200,
    data : {id : 1, productName : "Tablet", price: 800},
};


const {responsStatus, data: {productName, price} } = respons;

console.log(`El estado es: ${responsStatus}`);
console.log(productName);
console.log(price);