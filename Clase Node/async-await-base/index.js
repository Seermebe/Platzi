const call = require('./src/call')

// call.greet('Sargus Gas')

// call.withPromise('Sargus', 'Gas')
//     .then(name => console.log(name))

async function callWithPromise() {
    const fullName = await call.withPromise('Sargus', 'Gas')
    console.log(fullName)
}

callWithPromise()