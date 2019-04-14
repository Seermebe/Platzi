const call = require('./src/call')

// console.log(call.sync('Sargus'))
// call.withCallback('Sargus',call.sync)
call.withPromise('Sargus')
    .then(name => {
        console.log(name)
    })