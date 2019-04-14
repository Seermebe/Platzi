const server = require('http').Server()
const io = require('socket.io')(server)
const port = require('./config').SERVER_PORT

const banner = `
******************************
    Basic Node.js Course
        Course Project
        Triqui Server
******************************
Status: Online
Listener on por: ${port}
`

io.on('connection', (socket) => {
    socket.on('register', (user) => {
        console.log(`User registed: ${user.name}`)
    })
})

server.listen(port, () => {
    console.info(banner)
})