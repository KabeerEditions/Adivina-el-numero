$(function () {
    var numeroAdivinar = randomBetween(0, 100);
    var numeroJugador = 0;
    preguntar();

    function preguntar() {
        numeroJugador = Number(prompt("¿Que numero crees que es?"));
        comprobar();
    };
    
    function comprobar(){
        if (numeroJugador == numeroAdivinar)
        {
            console.log(`Has ganado, el numero era ${numeroAdivinar}. Por haber ganado te has convertido en el rey de los furros.`);
        }
    
        else
        {
            preguntar();
        }
    };
});

