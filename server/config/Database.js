import { Sequelize } from "sequelize";

const db = new Sequelize('Kohabit', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
