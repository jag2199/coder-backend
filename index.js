const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = 8080
const routes = require("./routes.js")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use(express.json())
app.use(express.static("./public/remeras"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes)


const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${server.address().port} ( http://localhost:${server.address().port} )`)
})

server.on("error", error => console.log("Error culiaw"))