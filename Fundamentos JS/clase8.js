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

// Cuando se pasa el objeto y dentro de la funcion se manipulan los atributos, estos quedaran modificados

function cunplanosReferencia(persona) {
    persona.edad += 1
}

function cunplanosValor(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}