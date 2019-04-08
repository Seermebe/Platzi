var edad = 33

// edad = edad + 1
edad += 1

var peso = 70

// peso = peso -2
peso -= 2

var sandwich = 1

// peso = peso + sandwich

peso += sandwich

var jugarFutball = 3

peso -= jugarFutball

var precioVino = 200.3

var total = precioVino * 3 //600.9000000000001

// Este error decimal se corrige asi:

total = Math.round(precioVino * 100 * 3) / 100 //600.9

var totalStr = total.toFixed(2)
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2

var cantPorcionesPorPersona = pizza / personas