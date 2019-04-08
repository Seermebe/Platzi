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

var ids = [1, 2, 3, 4, 5, 6, 7]

// var promesas = ids.map(function(id){
//     return obtenerPersonaje(id)
// })

var promesas = ids.map((id) => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes=>console.log(personajes))
    .catch(onError)


obtenerPersonajes()