var sergioObj = {
    nombre: 'Segio',
    apellido: 'Mesa',
    edad: 33
}

var johnObj = {
    nombre: 'John',
    apellido: 'Castañeda',
    edad: 30
}

// function imprimirNombreMayusculas(persona){
//     console.log(persona.nombre.toUpperCase())
// }

// Forma abreviada
function imprimirNombreMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(sergioObj)
imprimirNombreMayusculas(johnObj)
imprimirNombreMayusculas({ nombre: 'Pepito' })