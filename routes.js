const Container = require("./container")
const express = require("express")
const { Router } = express
const router = Router()

let container = new Container("./productos.txt")

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/productos", (req, res) => {
    res.render("productos", { productos: container.getAll() })
})

// router.get("/:id", (req, res) => {
//     res.send(container.getById(req.params.id))
// })

router.post("/productos", (req, res) => {
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