const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {


    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            }).fail(function () {
                console.log(`Sucedió un error. No se pudo obtener el id ${id}`)
            })
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then((persona1) => {
        console.log(`El personaje 1 es ${persona1.name}`)
        return obtenerPersonaje(2)
    }).then((persona2) => {
        console.log(`El personaje 2 es ${persona2.name}`)
        return obtenerPersonaje(3)
    }).then((persona3) => {
        console.log(`El personaje 3 es ${persona3.name}`)
        return obtenerPersonaje(4)
    }).then((persona4) => {
        console.log(`El personaje 4 es ${persona4.name}`)
        return obtenerPersonaje(5)
    }).then((persona4) => {
        console.log(`El personaje 5 es ${persona4.name}`)
        return obtenerPersonaje(6)
    }).then((persona4) => {
        console.log(`El personaje 6 es ${persona4.name}`)
        return obtenerPersonaje(7)
    }).then((persona4) => {
        console.log(`El personaje 7 es ${persona4.name}`)
    })
    .catch(onError)