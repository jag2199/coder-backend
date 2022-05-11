const Container = require("./container")
const express = require("express")
const { Router } = express
const router = Router()

let container = new Container("./productos.txt")

router.get("/", (req, res) => {
    res.send(container.getAll())
})

router.get("/new", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

router.get("/:id", (req, res) => {
    res.send(container.getById(req.params.id))
})

router.post("/", (req, res) => {
    console.log(req.body)
    res.send(container.save(req.body))
})

router.put("/:id", (req, res) => {
    res.send(container.update(req.params.id, req.body))
})

router.delete("/:id", (req, res) => {
    res.send(container.delete(req.params.id))
})

module.exports = router