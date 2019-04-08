var nombre = 'Sargus', apellido = 'Gas'

var nombreEnMayuscula = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var primeraLetraDelNombre = nombre.charAt(0)

var cantidadLetrasNombre = nombre.length
// var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` 
var str = nombre.substr(1,2)