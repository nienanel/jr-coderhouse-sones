// ///clases 
// ///objetos declarados como clases

class Pokemon {
    // Attributes of the Pokemon class
    nombre;
    tipo;
    nivel;
    poder;
    evolucionar;
    puntosAtaque;
    tipoAtaque;
    vida;
    nuevoPuntosAtaque;

    // Constructor function for creating new Pokemon objects
    constructor(nombre, tipo, nivel, poder, puntosAtaque, tipoAtaque, nuevoPuntosAtaque, vida) {
        // Set the attributes of the new Pokemon object based on the input parameters
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.poder = poder;
        this.puntosAtaque = puntosAtaque;
        this.tipoAtaque = tipoAtaque;
        this.nuevoPuntosAtaque = nuevoPuntosAtaque;
        this.vida = vida;
    }
}






    

//     ///acciones
//     //no hace falta tampoco el THIS, directamente el nombre del metodo

//     atacar = function () {
//         console.log(this.nombre + "genera un ataque de tipo " + this.tipo)      ///metodo de un objeto
//     }
    
//     evolucionar = function (nombre, nuevoPuntosAtaque, nuevaVida) {
//         this.nombre = nombre;
//         this.nivel = this.nivel + 1;
//         this.puntosAtaque = this.nuevoPuntosAtaque + 2;
//         this.vida = nuevaVida
//         console.log("se a evolucionado el pokemon a " + this.nombre);
//     } 
    
//     volverPokeBola = function() {
//         console.log("volver a la pokebola")
//     }
    
// }

// ///otro pokemon nuevo

// const unPokemon = new Pokemon("pikachu", "electrico", 1, "rayo", "ash", "electricidad", 3, 2 ,3);

// console.log(unPokemon);
// unPokemon.atacar();
// unPokemon.evolucionar("pikachumon", 5, 10)



// /// creo una clase:
// class productos {
//     constructor(nombre, precio) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }

// ///declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new productos("arroz", "125"))
// productos.push(new productos("fideo", "70"))
// productos.push(new productos("pan", "50"))
// ///itineramos el array con for...of para modificarlos a todos
// for (const producto of productos)
// producto.sumaIva();
