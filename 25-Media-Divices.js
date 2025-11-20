const buttonPermissions = document.querySelector('.button-permissions');

buttonPermissions.addEventListener('click', async() => {
    try {
        //Solicitar los perimisos para el video
        await navigator.mediaDevices.getUserMedia({video: true})
        const permission = await Notification.requestPermission();

if (permission === "granted"){
    new Notification('Permisos concedidos', {
        body: 'camara activada',
        icon: 'assets/image1.webp'
    })
}else {
    console.log('Permiso de notificacion denegado')
}
{
    }

});



//____________________________________________
catch(error{
    console.error('Error al solicitar permisos', error);
}
});
