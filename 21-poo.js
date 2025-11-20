//Programacion orientada a objetos
class product{
    constructor(productName, price, available){
        this.productName = productName;
        this.price = price;
        this.available = available;
    }

formatProduct(){
    return`El nombre del producto es ${this.productName}, su precio es ${this.price}, y actualemnte esta es su disponibilidad ${this.available}`;
}

}
const product1 = new product("Marcador", 5000, true);
const product2 = new product("Regla", 2000, false);
const product3 = new product("Borrador", 1000, true);

console.log(product1.formatProduct());
console.log(product2.formatProduct());
console.log(product3.formatProduct());

