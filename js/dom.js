let elemento;
/// el padre de todos los documentos es el document

elemento = document
elemento = document.head

///obtener la url donde esta el documento
elemento = document.URL
///optener el tipo de contenido
document.contentType
///ver todos los sripts que tiene el documento
document.scripts /// me va a  dar un array. por lo que puedo acceder por index a los distintos atributos

///seleccionar elementos del documentos y no solo los atributos
const h1 = document.getElementById("h1");
///lo pongo constante por que es id unico y no se tiene q mutar o clonar
console.log(h1.textContent)
h1.textContent = "hola mundo choto" // cambio el contenido

//puedo cambiar aributos de los estilos css
h1.style.color = "red"
// no es lo mas recomendado pero se puede acceder a todo

///optener elemnto por clase

const pepe = document.getElementsByClassName("pepe") /// nosdevvuelve simepre un array
console.log(pepe)
///debo acceder a los valores de larray para modificar
pepe[0].textContent = "hola como va todo super piola che lalalala"

///si no encuentra un class igual me va adevolver un array vacio
///si no encuentra un id nos devuelve null ( un objeto que no existe)

if (pepe.length > 0) {
    pepe[1].style.color = "blue"
}

/// puedo acceder a la lista de clases de un elemnto
// classList

//puedo agregar o quitar una clase a la lista con
// .add o .remove
// h1.classList.add()

///traer elementos por el nombre del tag
const divs = document.getElementsByTagName("div")

///acceder a los hijos a traves del elemnto

console.log(divs[0].firstElementChild);
/// lastelemntchild, children, etc

///acedeer al contendio del div en formato html
console.log(divs[1].innerHTML)
divs[1].innerHTML = ""; ///desaparece en el html
///puedo agregar o sacar directaemnte lo que quiero del html por este medio


///agregar o quietar nodos

let pokemones = [];

function cargarpokemones() {
    const nuevopokemon = Pokemon()
    nuevopokemon.nombre = prompt("Ingrese nombre")
    nuevopokemon.nivel = number(prompt("Ingrese nivel"))

    pokemones.push(nuevopokemon)
}

const cargarpoke = () => {
    let seguir;
    do {
        cargarpokemones()
        seguir = prompt("¿Desea seguir?")
    } while (seguir == "si")
}

function mostrarpokemones() {
    let tabla = document.getElementsByTagName("body")
    tabla.innerHTML = "";
    let counter = 1
    pokemones.forEach((pokemon) => {
        tabla.innerHTML += `
        <tr>
            <th>${counter}</th>
            <td>${pokemon.nombre}</td>
            <td>${pokemon.nivel}</td>
        </tr>
        `;
        counter++;
    })
}

cargarpoke();
mostrarpokemones();




