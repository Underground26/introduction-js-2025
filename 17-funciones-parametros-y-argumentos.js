
//funciones parametros y argumentos

 function add(num1, num2){
     console.log(num1 + num2);
     }

add(7,10);
// add(742,10);
// add(71,10);
//  add(834,10);
//  add(2,1);

const add2 = function (num3, num4){
    console.log(num3 + num4);
}

add2(5,1);

const result = add(5,1) + 8;
console.log(result);


// funcion con valores por defecto 
function add3(num5 = 9, num6 = 3){
    console.log(num5 + mum6);
}
add3();