const product = {
    productName : "Multimetro",
    price : 150,
    available: true,
}

// Con el metrodo o funcion freeze bloqueamos el objeto para que No se pueda agregar propiedades
Object.freeze(product);

// eliminar propiedades
// delete product.price;

// agregar propiedad
// product.color = "Yellow";
// product.available.quantify = 10;

// Modificar propierdad
// product.price = 500;

// El metodo seal NO permite eliminar propiedades, agregar, pero si permite modificar
Object.seal(product);
// eliminar propiedad
delete product.price;
product.color = "Yellow";
product.price = 500;
console.log(product);

console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));



