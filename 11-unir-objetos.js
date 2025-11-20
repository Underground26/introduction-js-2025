const product = {
    productName : "Multimetro",
    price : 150,
    available: true,
}

Object.freeze(product);

// Objeto que almacena medidas 
const measurements = {
    weight : "1 Kg",
    measurement : "15 cm"
}

// Rest operator
const newProduct = {...product, ...measurements}
console.log(newProduct);
