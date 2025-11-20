//Operador Nullish colescing
//Sirve para dar un valor por defect, cuando algo es null o undefiend

// Estructura: valor1 ?? valor2


//1- Si valor 1 no es null ni undefined, se usa valor1
//2- Si valor1 es null o undefined, se usa valor2

//ejemplo
let userName = null;
let user = userName ?? "Invited";

console.log(user);