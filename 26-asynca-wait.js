function downloadClients(){
    return new Promise( resolve =>  {
        //Aqui va el codigo con la ruta para descargar los clientes
        console.log('Descargando clientes...');

        //Estas lineas se ejecutan despues de pasado un tiempo determinado en propgramación
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 3000);
    })
}




async function app() {
    try{
        const clients = await (downloadClients())
        console.log('Este codigo si se bloquea');
        console.log(clients)
    } catch (error) {
        console.log(error)
    }
    
    
}
app();
console.log('Este codigo No se bloquea');

//De esta manera no se ejecutan las dos promesas al mismo tiempo

// //_________
// function downloadLastTestOrders(){
//     return new Promise( resolve => {
//     console.log('Descargar pedidos')    

//     setTimeout(() => {
//         resolve('Las orddenes fueron descargadas')
//     }, 5000);
//     })
// }
// async function app() {
//     try{
//         const orders = await (downloadLastTestOrders())
//         console.log('Esta orden se bloquea');
//         console.log(orders)
//     } catch (error) {
//         console.log(error)
//     }
//==============================================
//Este es un metodo mas eficiente, se ejecutan las dos al mismo tiempo
async function app() {
    try{
        const result = await Promise.all([downloadClients(),downloadLastOrders()])

        console.log('Este codigo si se bloquea');
        console.log(result[0]);
        console.log(result[1]);

    } catch (error) {
        console.log(error)
    }
    
    
}
app();
console.log('Este codigo No se bloquea');