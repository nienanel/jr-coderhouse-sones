///ejemplo de como llamar a un elemento y signarle un evento

// let boton = document.getElementById("botonprincipal")
// boton.addEventListener("click",respuestaClick)
// function respuestaClick(){
//     console.log("respuesta evento")
// }

//// primero obtener el elemento del dom
const boton1 = document.getElementById("boton1");
///dsp lo escucho y con arrow funcion directamente le doy el evento que quiero o con function
boton1.addEventListener(`click`, () => {
    alert("eee me clickeaste")
})

boton1.addEventListener(`mouseover`, () => {
    alert("lalalala");
})
///ejemplo sobre un div
// const midiv = document.getElementById("midiv");
// midiv.addEventListener("mouseover", () => {
//     alert("lololo")
// })

///2da forma de escuchar eventos
/// con on. y el evento.
const boton2 = document.getElementById("boton2");
boton2.onclick = () => {
    alert(`click en el boton2`)
}

/// la fiferencia es que en el primer metodo me permitria agregar una variable q se ejecute en algun momento
//// let evento = "onchange" pj. se usa mas el primero

///ejemplo de recorrer una lista de eventos como un array
// function recorrerlistaeveentos (eventos,funciones) {
//     eventos.forech((evento) => {
//         boton1.addEventListener(evento,funciones[0])
//     })
// }

////un evento muy comun q se usa siempre; domContentLoaded
///cargar todo el documento es en si un evento.
///necesito que este todo cargado, incluso los scrip..
document.addEventListener(`DOMContentLoaded`, () => {
    console.log("documento cargado")
})
///cuando se carga todo el html, se ejecuta este evento
///obtener datos del local storage y setearlos..

///eventos de teclado con input
const input = document.getElementById("input1")
// input.addEventListener("keydown", () => {
//     alert("apretaaste una tecla!")
// })

// input.addEventListener("change", () => {
//     input.style.backgroundColor = "red";
// })

input.addEventListener("input", () => {
    if (input.value.includes(`@`))
    {
        input.style.border = "5px solid red"
    }else {
        input.style.border = "4px dotted blue"
    }
})
///el input y el change son los mas communes en los inputs


///eventos submit

let miformulario = document.getElementById("formulario");
miformulario.addEventListener("submit", validarformulario);

function validarformulario(e) {
    e.preventDeFaulto();///prevenir que ocurra el elemento
    console.log("formulado enviado")
}

///e es el parametro en si. en la funcion, me permite llevarme el evento que surgio en el momento

