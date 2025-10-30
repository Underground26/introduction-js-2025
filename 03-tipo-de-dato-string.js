//String o cadena de texto
const userName = "Carlos";
const userName1 = "Edwar";
//typo de dato
console.loge(typeof userName);

//Dos formas no tan comunes 

const userName3 =String("Vero");
console.log(userName3);
//Creamos una variable, mediante el constructor,intanciando  a partir de la palabra new

//instanciar, crear un obeto a partir de una clase - 
const userName4 = new String("Vero");

let product = "Televisor de 50\"";
console.log(product)


let phrase = "Estamos aprendiendo JS en el CDITI";
console.log(phrase.length);

//Busca si una cadena existe y me da su indexacion.
//Si el resultado es menor que cero la cadena no existe 
console.log(phrase.indexOf("Estamos"));

//Metodo mas moderno para buscar si una cadena existe 
console.log(phrase.incluse("JS"));

