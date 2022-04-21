const fs = require("fs")

class Container {
    constructor(nom) {
        this.nombre = nom
        this.productos = []
    }
    async write() {
        await fs.promises.writeFile(this.nombre, JSON.stringify(this.productos, null, ''))
    }

    save(object) {
        object["id"] = this.productos.length ? ((this.productos[this.productos.length - 1].id) + 1) : 1
        this.productos = [...this.productos, object]
        this.write()
        return object.id
    }

    getByID(id) {
        let producto = this.productos.find(x => x.id === id)
        return producto === undefined ? null : producto
    }

    async getAll() {
        return this.productos
    }

    deleteByID(id) {
        let roductos = this.productos.filter(x => x.id !== id)
        this.productos = roductos
        this.write()
    }

    async deleteAll() {
        this.productos = []
        this.write()
    }
}
module.exports = Container