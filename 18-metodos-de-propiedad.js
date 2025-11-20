//Se va a realizar un reproductor de canciones

vallenato[""];
heavyMetal[""];
rock[""];



// Metodos de propiedad
const player = {
    play : function(id){
        return(`Reproduciendo cancion.... ${id} `);
    },

    pause : function(){
        console.log("Pausamos cancion...")
    }
}

player.delete = function(id){
    return `Eliminando cancion ${id}`;

}

console.log(player.play(1023));
console.log(player.delete(34));