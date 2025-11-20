// Rest operator, lo que se busca es No modificar el arreglo  original 
const months = ['december', 'November', 'January', 'Febrary'];
console.table(months)

//Crear un nuevo arreglo  y lo unimos con otro 
const newArray = [...months, 'May'];
console.table(newArray);

const newArray2 = ['October', ...newArray];
console.table(newArray2);

