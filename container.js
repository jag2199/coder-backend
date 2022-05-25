const res = require("express/lib/response")

class Container {
    constructor(nom) {
        this.nombre = nom
        this.products = []
    }
    read() {
        try {
            let contenido = JSON.parse(fs.readFileSync(this.nombre))
            console.log(contenido)
            return contenido
        }
        catch (error) {
            return []
        }
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