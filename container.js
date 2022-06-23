import knex from "knex"

class Container {
    constructor(options, nom) {
        this.nombre = nom
        this.db = knex(options)
    }

    async getAll() {
        try {
            return await this.db.from(this.nombre).select("*")
        }
        catch (err) {
            return "wtf"
        }
    }

    async getById(id) {
        try {
            return await this.db.from.select.where("id", id)
        } catch (error) {
            return { error: "producto no encontrado" }
        }
    }

    async save(obj) {
        try {
            await this.db(this.nombre).insert(obj)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async update(id, obj) {
        await this.db.from(this.nombre).where("id", "=", id).update(obj)
    }

    async delete(id) {
        await this.db.from(this.nombre).where("id", "=", id).del()
    }
}

module.exports = Container

// (async () => {
//     try {
//         await knex(options).schema.createTable("productos", table => {
//             table.increments("id").primary().unique()
//             table.string("nombre").notNullable()
//             table.float("precio").notNullable()
//             table.string("thumbnail").notNullable()
//         })
//             .then(() => {
//                 console.log("Tabla productos creada")
//             })
//     } catch (error) {

//     }
// })()

  // read() {
    //     try {
    //         let contenido = JSON.parse(fs.readFileSync(this.nombre))
    //         console.log(contenido)
    //         return contenido
    //     }
    //     catch (error) {
    //         return []
    //     }
    // }

     // try {
        //     obj["id"] = this.products.length ? ((this.products[this.products.length - 1].id) + 1) : 1
        //     this.products.push(obj)
        //     return obj
        // }
        // catch (err) {
        //     console.log(err)
        //     return "wtf2"
        // }