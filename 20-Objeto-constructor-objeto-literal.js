// El objeto literal es la forma directa de crear un objeto usando {} u pares de clave valor 

const persone = {
    userName : "peter"
}

// Objeto constructor: Crea objetos mediante una funcion o clase usando new

// const person1 = new Person("Maria", 25, true);

// ===========================================================================//

//Objeto Constructor
function Product (productName, price){
    this.productName =productName;
    this.price = price;
}

const product = new Product("Monitor curvo 24", 600000);
const product1 = new Product("Mouse", 600000);
const product2 = new Product("KeyBoard", 600000);

console.log(product);
console.log(product1);
console.log(product2);


//======================================================================//

//Prototype: Prototipo es como un molde o modelo base
// Cuando se crean objetos que se parecen, No se quiere escribir lo mismo muchas veces 

function Car(Brand, color) {
    this.Brand = Brand;
    this.color = color;   
}

// se define una duncion comun para todos los carros 

Car.prototype.slowDown = function(){
    console.log(this.brand + " Esta Frenando ");
}

const car1 = new Car('Kia', 'gray');
const car2 = new Car('Toyota', 'white');

car1.slowDown();



//==================================================================//

//ejercicio 
// Objeto persona (nombre, edad, correo)


function People(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}

People.prototype.popUp = function(){
    console.log(`El nombre del usuario es: ${this.name}, La edad es ${this.age}, el correo es ${this.email}`);
}

const User1 = new People("brahian", 21, "brahiamgp@gmail.com");
const User2 = new People("Yessica", 23, "yessica_23@gmail.com");
const User3 = new People("Diana", 53, "dianapinzon@outlook.com");

User1.popUp();
User2.popUp();
User3.popUp();


