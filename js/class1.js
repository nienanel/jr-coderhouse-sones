///clases 
///objetos declarados como clases

class Pokemon {
    ///atributos
    nombre;
    tipo;
    nivel;
    poder;
    evolucionar;
    puntosAtaque;
    tipoAtaque;
    vida;
    nuevoPuntosAtaque

    ///funcion contructora
    ///no es necesario cargar todos los atributos aunque este declarado arriba en la clase
    constructor(nombre, tipo, nivel, poder,puntosAtaque, tipoAtaque, nuevoPuntosAtaque, vida) {

        this.nombre = nombre
        this.tipo = tipo
        this.nivel = nivel
        this.poder = poder
        this.puntosAtaque = puntosAtaque
        this.tipoAtaque = tipoAtaque
        this.nuevoPuntosAtaque = nuevoPuntosAtaque
        this.vida = vida
    }

    ///acciones
    //no hace falta tampoco el THIS, directamente el nombre del metodo

    atacar = function () {
        console.log(this.nombre + "genera un ataque de tipo " + this.tipo)      ///metodo de un objeto
    }
    
    evolucionar = function (nombre, nuevoPuntosAtaque, nuevaVida) {
        this.nombre = nombre;
        this.nivel = this.nivel + 1;
        this.puntosAtaque = this.nuevoPuntosAtaque + 2;
        this.vida = nuevaVida
        console.log("se a evolucionado el pokemon a " + this.nombre);
    } 
    
    volverPokeBola = function() {
        console.log("volver a la pokebola")
    }
    
}

///otro pokemon nuevo

const unPokemon = new Pokemon("pikachu", "electrico", 1, "rayo", "ash", "electricidad", 3, 2 ,3);

console.log(unPokemon);
unPokemon.atacar();
unPokemon.evolucionar("pikachumon", 5, 10)