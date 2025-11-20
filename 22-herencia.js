// class Product{
//     constructor(productName, price, available){
//         this.productName = productName;
//         this.price = price;
//         this.available = available;
//     }

// formatProduct(){
//     return`El nombre del producto es ${this.productName}, su precio es ${this.price}, y actualemnte esta es su disponibilidad ${this.available}`;
// }

// }
// const product1 = new Product("Marcador", 5000, true);
// const product2 = new Product("Regla", 2000, false);
// const product3 = new Product("Borrador", 1000, true);

// console.log(product1.formatProduct());
// console.log(product2.formatProduct());
// console.log(product3.formatProduct());


// class book{
//     constructor(bookName, price, ISBN){
//         this.bookName = bookName;
//         this.price = price;
//         this.ISBN = ISBN;
//     }
// }

// const book1 = new book("la ciudadela", 30000, 11223344);
// const book2 = new book("el principito", 25000, 55667788);
// const book3 = new book("de la tierra a la luna", 15000, 77777777);

// console.log(book1);
// console.log(book2);
// console.log(book3);

//======================================================================================//

//la herencia permite que los objetos y clases re-utilicen propiedades y metodos de otros
// class book extends Product{
//     constructor(bookName, price, ISBN){
//         super(bookName, price);
//         this.ISBN = ISBN;
//     }
//     formatProduct(){
//         return`El nombre del libro es ${this.bookName}, su precio es ${this.price} y su ISBN es ${this.ISBN}`
//     }
// }

// const book1 = new book("la ciudadela", 30000, 11223344);
// const book2 = new book("el principito", 25000, 55667788);
// const book3 = new book("de la tierra a la luna", 15000, 77777777);

// console.log(book1.formatProduct());
// console.log(book2.formatProduct());
// console.log(book3.formatProduct());


//====================================================================================================//

// //Heredar Metodos
// class book extends Product{
//     constructor(bookName, price, ISBN){
//         super(bookName, price);
//         this.ISBN = ISBN;
//     }
//     formatProduct(){
//         return `${super.formatProduct() y su ISBN es ${this.ISBN}}`
//     }
// }

// const book1 = new book("la ciudadela", 30000, 11223344);
// const book2 = new book("el principito", 25000, 55667788);
// const book3 = new book("de la tierra a la luna", 15000, 77777777);

// console.log(book1.formatProduct());
// console.log(book2.formatProduct());
// console.log(book3.formatProduct());


//=====================================Ejercicio========================================================//


class Medicine {
    constructor(medicineName, price, Brand){
    this.medicineName = medicineName;
    this.price = price;
    this.Brand = Brand;
}
    print(){
        return `El medicamento seleccionado es ${this.medicineName}, el precio es: ${this.price}, laboratorio registrado: ${this.Brand}`;
    }

}

const medicine1 = new Medicine("dolex", 3000, 'JGB');
const medicine2 = new Medicine("advil", 3500, 'JGB');
const medicine3 = new Medicine("ibuprofeno", 4000, 'JGB');


console.log(medicine1.print());

//==========================================Extendido==============================================//


class Lab {
    constructor(medicineName, price, Brand){
    super(medicineName, price, Brand);
}
    print(){
        return `${super.print()}`;
    }

}

const medicine4 = new Lab("dolex", 3000, 'JGB');
const medicine5 = new Lab("advil", 3500, 'JGB');
const medicine6 = new Lab("ibuprofeno", 4000, 'JGB');

console.log(medicine4.print());
console.log(medicine5.print());
console.log(medicine6.print());

