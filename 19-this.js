// This es una palabra reservada del sistema y no podemos usarla para nombrar variables o funciones
const reservation = {
    userName : "Brahian",
    lastName : "Galeano",
    userAge : 21,
    totalPay : 42000,
    isPayed : true,

    information : function(){
    return(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay}`);

    }
}

const reservation2 = {
    userName : "Yessica",
    lastName : "Ramirez",
    userAge : 23,
    totalPay : 32000,
    isPayed : true,

    information : function(){
    return(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay}`);

    }
}

const reservation3 = {
    userName : "Diana",
    lastName : "Pinzon",
    userAge : 53,
    totalPay : 500000,
    isPayed : true,

    information : function(){
    return(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay}`);

    }
}
console.log(reservation.information());

