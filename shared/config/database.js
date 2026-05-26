class Database {
    constructor() {
        if (!Database.instance) {
            Database.instance = this;
        }

        return Database.instance;
    }

    connect() {
        console.log("Banco conectado");
    }
}

const instance = new Database();

Object.freeze(instance);

module.exports = instance;
