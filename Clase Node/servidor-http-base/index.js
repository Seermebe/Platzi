const http = require('http')
const fs = require('fs')

const server = http.createServer((reg, res) => {
    fs.readFile('./resources/my_page.html', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        res.end(data)
    })
})

console.log('Iniciando servidor...')
server.listen(3000)