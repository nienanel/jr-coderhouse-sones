
///ejemplo de un objeto literal (no pertenece a ninguna class ni tiene un constructor asociado),
///dentro de un array. un array de varios objetos "libros"

const libros = [{

    title: "Snowflake: The Definitive Guide",

    subtitle: "Architecting, Designing, and Deploying on the Snowflake Data Cloud",

    isbn13: "9781098103828",

    price: 58.90,

    image: "https://itbook.store/img/books/9781098103828.png",

    url: "https://itbook.store/books/9781098103828"

},

{

    title: "Python for Data Analysis, 3rd Edition",

    subtitle: "Data Wrangling with pandas, NumPy, and Jupyter",

    isbn13: "9781098104030",

    price: 37.49,

    image: "https://itbook.store/img/books/9781098104030.png",

    url: "https://itbook.store/books/9781098104030"

},

{

    title: "Reliable Machine Learning",

    subtitle: "Applying SRE Principles to ML in Production",

    isbn13: "9781098106225",

    price: 43.99,

    image: "https://itbook.store/img/books/9781098106225.png",

    url: "https://itbook.store/books/9781098106225"

},

{

    title: "Data Visualization with Python and JavaScript, 2nd Edition",

    subtitle: "Scrape, Clean, Explore, and Transform Your Data",

    isbn13: "9781098111878",

    price: 60.99,

    image: "https://itbook.store/img/books/9781098111878.png",

    url: "https://itbook.store/books/9781098111878"

}];

// ///metodo foreach

// libros.forEach((libro) => console.log(libro.title)) ///llamo el valor del array que quiero mostrar
// ///la palabra "libro" es indiferente, js sabe que esto refieiendo a los elementos que conforman el array

// let Encontrado = libros.find((libro) => libro.isbn13 == 9781098106225) ///esto me va a arrojar una variable con el objeto q estoy buscando
// console.log(Encontrado)

///
// ///filter

// // const librosBaratos = libros.filter((libro) => libro.price < 44)
// // console.log(librosBaratos)

// const librosConData = libros.filter((libro) => libro.title.includes('Data'))
// ///el icludes es case sensitive y llama a un string en este caso
// console.log(librosConData)

///
///map 
// const listaTitulos = libros.map((libro) => libro.title.toUpperCase())
// console.log(listaTitulos)

// const listaTitulosYPrecios = libros.map((libro) => {
//     return {
//         title: libro.title.toUpperCase(),
//         price: libro.price                                     ///me va a retornar un nuevo objeto con estos datos o un array con objetos modificados
//     }
// })
// console.log(listaTitulosYPrecios)

///
///reduce
// const numeros = [1, 2, 3 ,4, 5]
// const total = numeros.reduce ((acumulador, elemnto) => acumulador + elemnto, 0)

// console.log(total);

///en este ejemplo en el acumulador sumamos cada elemnto del array y al terminar la itineracion nos devuelve
///ese resultado.
///el segundo parametro del reduce (0), es el valor inicial del acumulador


const totalPrecios = libros.reduce((sumador, libros) => sumador + libros.price,0);
console.log("la suma de los precios de todos los libros es " + totalPrecios)

///sort

// libros.sort((a,b) => a.price - b.price)
// console.table(libros)

// /// me lo rodena de forma acendente. numericamente
// ///si pongo b - a seria de forma desendente


libros.sort((a,b) => a.title.localeCompare(b.title));
///para ordenar strigs usamos el localecompare 