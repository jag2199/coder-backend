export const options = {
    mariaDB: {
        client: "mysql",
        connection: {
            host: "127.0.0.1 ",
            user: "root",
            password: "",
            database: "dbDesafio"
        },
    },
    sqlite3: {
        client: "sqlite3",
        connection: {
            filename: "./DB/ecommerce.sqlite"
        },
        useNullAsDefault: true
    }
}