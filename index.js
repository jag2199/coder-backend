Container = require("./container")
container = new Container("./productos.txt")

const main = async () => {
    obj1 = {
        title: "Belgrano de Cba",
        price: 400,
        thumbnail: "aguantebelgrano.lcdll"
    }
    let guardarObj1 = container.save(obj1)
    console.log(guardarObj1)

    obj2 = {
        title: "Pablo Vegetti",
        price: 700,
        thumbnail: "belgranoElMasGrandeDeCba.gallinaqliadasa"
    }
    let guardarObj2 = container.save(obj2)
    console.log(guardarObj2)

    let productoID = container.getByID(2)
    console.log(productoID)

    console.log(`Todos los productos son: ${JSON.stringify(await container.getAll())}`)

    container.deleteByID(2)

    console.log(`Ahora todos los productos son: ${JSON.stringify(await container.getAll())}`)

    container.deleteAll()

    console.log(`Ahora todos los productos son: ${JSON.stringify(await container.getAll())}`)

}

main()