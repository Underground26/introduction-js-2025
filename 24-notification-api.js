// notification API 

// Es una interfaz que permite a las aplicaciones web, mostrar notificaciones nativas del sistema operativo
// incluso cuando la ventana no esta activada

// const button = document.querySelector(".button");

// button.addEventListener("click", () =>{
//     console.log("You do click, ever button");
// })


//=================================================================

// Seleccionar la clase button en el DOM 

const button = document.querySelector(".button");

button.addEventListener("click", () =>{
    Notification.requestPermission().then(permission =>{
        if(permission === 'granted'){
            new Notification("Esta es una notificacion",{
                 body : "Aprendiendo JS en el SENA",   
                 icon : "",     
            })
            
        } 
    })
    console.log("Permiso concedido");
})


