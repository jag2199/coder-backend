const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = 8080
const routes = require("./routes.js")

app.use(express.json())

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api/productos", routes)
// https://github.com/jag2199/desafios-backend.git
const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${server.address().port} ( http://localhost:${server.address().port}/api/productos )`)
})

server.on("error", error => console.log("Error culiaw"))