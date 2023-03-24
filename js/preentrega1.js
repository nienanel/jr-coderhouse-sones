

/// logaritmo simple que cuenta los puntos de un partido de basquet y da el equipo ganador

function puntos(dobles, triples) {

    let totalDePuntos = (dobles * 2) + (triples * 3);
    return totalDePuntos;
}

let puntosEquipo1 = puntos(8, 10);

let puntosEquipo2 = puntos(15, 6)


if (puntosEquipo1 < puntosEquipo2) {

    console.log("gano equipo 2")

} else if (puntosEquipo1 > puntosEquipo2) {

    console.log("gano equipo 1")
} else {

    console.log("empate")
}


///entre juego de piedra papel o tijeras


let Nombre = prompt("Hola! como te llamas?");
let partidasJugador = 0;
let partidasIa = 0;

while (partidasJugador < 2 && partidasIa < 2) {
    let Juego = prompt("piedra, papel o tijeras?");


switch (Juego) {

    case "piedra":
        alert("papel! perdiste " + Nombre);
        partidasIa++;
        break
    case "papel":
        alert("tijera! jaja perdiste " + Nombre)
        partidasIa++;
    break
    case "tijera":
        alert("papel! maldito seas! " + Nombre)
        partidasJugador++;

    default:
        alert("eso no vale")
        break
}}

if (partidasJugador > partidasIa) {
    alert("felicidades " + Nombre + "ganaste a la ia!");
} else {
    alert("fuiste derrotado por la super ia");
}

