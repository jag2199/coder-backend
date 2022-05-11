const res = require("express/lib/response")

const productos = [{ "id": 1, "title": "Escuadra", "price": 123.45, "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png" }, { "id": 2, "title": "Calculadora", "price": 234.56, "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png" }, { "id": 3, "title": "Globo Terráqueo", "price": 345.67, "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png" }]

class Container {
    constructor(nom) {
        this.nombre = nom
        this.products = productos
    }

    getAll() {
        try {
            return this.products
        }
        catch (err) {
            return "wtf"
        }
    }

    getById(id) {
        const producto = this.products.filter(p => p.id == id)[0]
        return producto ? producto : { error: "producto no encontrado" }
    }

    save(obj) {
        try {
            obj["id"] = this.products.length ? ((this.products[this.products.length - 1].id) + 1) : 1
            this.products.push(obj)
            return obj
        }
        catch (err) {
            console.log(err)
            return "wtf2"
        }
    }

    update(id, obj) {
        this.products = this.products.map(p, () => {
            if (p.id == id) {
                p = { ...obj, id: id }
            }
        })
    }

    delete(id) {
        this.products = this.products.filter(p => p.id !== id)
    }
}

module.exports = Container