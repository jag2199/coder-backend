const express = require("express")
const bodyParser = require("body-parser")
const http = require("http")
const app = express()
const PORT = 8080
const routes = require("./routes.js")
const { Server: ioServer } = require("socket.io")

const httpServer = http.createServer(app)
const io = new ioServer(httpServer)

app.set("view engine", "ejs")
app.set("views", __dirname + "/public/views")

// middlewares
app.use(express.json())
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes)

// io
io.on("connection", (socket) => {
    console.log("conectado")
    // socket.emit("productos", container.getAll())

    // socket.on("newProd", (arg) => {
    //     console.log(arg)
    //     io.sockets.emit("productos", container.getAll())
    // })

    const msj = []

    socket.emit("chat", msj)

    socket.on("newMsj", newMsj => {
        msj.push(newMsj)
        io.sockets.emit("chat", msj)
    })
})

// server
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${server.address().port} ( http://localhost:${server.address().port} )`)
})

server.on("error", error => console.log(error))