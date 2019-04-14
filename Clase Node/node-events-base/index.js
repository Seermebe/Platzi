const greet = require('./src/greet')

//  greet.emit('clap')
// greet.emit('shout', 'viva EL AMOR')
greet.emit('call', 'Sargus', name => {
    console.log(`Hola ${name}`)
})