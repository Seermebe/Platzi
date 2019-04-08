const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE.replace(':id', id)}`
    $.get(url, opts, callback).fail(function(){
        console.log(`Sucedió un error. No se pudo obtener el id ${id}`)
    })
}

obtenerPersonaje(1, function (persona) {
    console.log(`Hola yo soy ${persona.name}`)

    obtenerPersonaje(2, function (persona) {
        console.log(`Hola yo soy ${persona.name}`)

        obtenerPersonaje(3, function (persona) {
            console.log(`Hola yo soy ${persona.name}`)

            obtenerPersonaje(4, function (persona) {
                console.log(`Hola yo soy ${persona.name}`)

                obtenerPersonaje(5, function (persona) {
                    console.log(`Hola yo soy ${persona.name}`)

                    obtenerPersonaje(6, function (persona) {
                        console.log(`Hola yo soy ${persona.name}`)
                    })
                })
            })
        })
    })
})