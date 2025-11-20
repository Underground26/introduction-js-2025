//Try Catch
//Es una estructura utilizada para  manejrar errores en tiempo de ejecucion
//permitiendo que el programa continue ejecutandose sin fallar completamente
//try:Dentro de este bloque se introduce el codigo que peude generar el error
//catch: Captura el error si ocurre dentro del bloque try u permite manejarlo
//finally(opcional): Ejecuta el codigo siempre, ocurra o no el error

const num1 = 20;
const num3 = 30;


console.log(num1);
// console.log(num2);
console.log(num3);

try{
    console.log(num2);
}
catch{
    console.log("Error, la variable no ha sido creada");
}


//========================================================================

try{
    console.log(x);
}
catch(error){
    console.log("Ocurrio un error", error.message);
}

//=========================================================================
//Un try catch con error personalizado throw

try{
    const age = "Hola";

    if(isNaN(age)) throw "  La edad debe ser un numero";
    console.log("Edad valida");
}   catch(Error){
    console.log("Este es un error personalizado",Error);
}


//=============================================================================
//Capturar errores en funciones

function divide(a,b){
    try{ 
        if(b === 0){
            throw "No se puede dividir sobre 0"
        }
    }catch(error){
        return "Error" + error;
    }
}

console.log(divide(10,2));
