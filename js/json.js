/// localstorage es un objeto y local
/// por lo que tiene metodos
///el valor siempre es un string

///setitem para almacenar info
// localStorage.setItem(`bienvenida`, `hola coder!`);
localStorage.setItem(`nombreusuario`, `pepe`)
localStorage.setItem(`booleano`, true);

///obtener datos de localstorage
///sea numero o booleano, me va a devolver siempre un string
let nombre = localStorage.getItem(`nombreusuario`)

///info de la seccion
sessionStorage.setItem(`unvalor`, 5);

///bucle para itinerar for key

///accddr a las claves del storage
console.log("clav del " + localStorage.key[1])
///el storage pose un atrubuto que es el length
localStorage.length ///me va devolver todos
/// y lo recorro con el loop de for y el key

// for (let i = 0; i < localStorage.length; i++) {
//     console.log(`${localStorage[i]} : ${localStorage.getItem(localStorage.key[i])}`)

///remover 
// localStorage.removeItem(`nombreusuario`)
// localStorage.clear()

///modificar una clave con setitem
// let user = localStorage.setItem("nombre")
// user = "pepito"
// localStorage.setItem("nombre", user)


///almacenar array y/o objetos

///  (me lo guarda como string....)
/// por lo q no son validos los metodos de array!!!

const miArray = ["pepe", "jose", "lolo"]
localStorage.setItem("unArray", miArray);

const objetito = {nombre:"arroz", preio: 200}

///json es una notacion de objetos de js
///representa y transforma objetos con estructuras (objetos)

///json es un string con reglas especificas con un formato especifico
///lenguaje de almacenamiento de informacion

/// stingify como metodo para convertir objetos js en json
/// parce para pasar de json a js


const objetito2 = {nombre:"arroz", preio: 2500, activo:true}
const elementoJson = JSON.stringify(objetito2)
const objetitoJs = JSON.parse(objetito2)

///guardando en el localstorage



