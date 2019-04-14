const fs = require('fs')
const ops = require('./src/fileops')
const numPath = '/Users/macbook/Documents/GitHub/Platzi/Clase Node/node-fs-base/resources/number.txt'
const numPathNew = '/Users/macbook/Documents/GitHub/Platzi/Clase Node/node-fs-base/resources/numberNew.txt'
const namePath = '/Users/macbook/Documents/GitHub/Platzi/Clase Node/node-fs-base/resources/name.txt'
const namePathNew = '/Users/macbook/Documents/GitHub/Platzi/Clase Node/node-fs-base/resources/nameNew.txt'

let incValues

// fs.readFile(numPath, 'utf8', (err, text) => {
//     if (err) throw err
//     const numbers = text.split('\n').map(n => Number(n))
//     // console.log(numbers)
//     incValues = ops.incrementValues(numbers)

//     fs.writeFile(numPathNew, incValues.join('\n'), (err, result) => {
//         if (err) throw err
//     })
// })

fs.readFile(namePath, 'utf8', (err, text) => {
    if (err) throw err
    const names = text.split('\n')
    // console.log(names)
    incValues = ops.callNames(names)

    fs.writeFile(namePathNew, incValues.join('\n'), (err, result) => {
        if (err) throw err
    })
})
