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

function imprimirNombreMayusculas(persona) {
    var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(sergioObj)
imprimirNombreMayusculas(johnObj)
imprimirNombreMayusculas({ nombre: 'Pepito' })