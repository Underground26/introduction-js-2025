//Fetch API
//Fetch es una funcion de js que permite realizar peticiones http,incluyendo GET,POST,PUT,DELETE, etc, es una API moderna.

function getEmployees(){
    //Aqui se copiaria la url, hattps://www.ricoprogramar.com


    const file = 'employees.json';
    fetch(file)
    //Aqui se obtienen los datos
    .then( result => {
      return result.json();
    })

    //Se muestran los datos

    .then( data => {
        console.log(data);
    

    const { employees } = data;

    console.log(employees);

    //Se itera por el

    employees.forEach( employe => {
        console.log(employe.id);
        console.log(employe.userName);
        console.log(employe.job);

        document.querySelector(' .content').textContent = employe.userName;
    })
})
}
getEmployees();