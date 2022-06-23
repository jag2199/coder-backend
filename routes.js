const Container = require("./container")
const { options } = require("./configDB")
const express = require("express")
const { Router } = express
const router = Router()

let container = new Container(options.mariaDB, "productos")

router.get("/", (req, res) => {
    res.render("index", { productos: container.getAll() })
})

// router.get("/productos", (req, res) => {
//     res.render("productos",)
// })

// router.get("/:id", (req, res) => {
//     res.send(container.getById(req.params.id))
// })

router.post("/", (req, res) => {
    console.log(req.body)
    container.save(req.body)
    res.redirect("/")
})

// router.put("/:id", (req, res) => {
//     res.send(container.update(req.params.id, req.body))
// })

// router.delete("/:id", (req, res) => {
//     res.send(container.delete(req.params.id))
// })

module.exports = router