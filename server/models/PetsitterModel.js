import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Petsitter = db.define('petsitters',{
    name:{
        type : DataTypes.STRING
    },
    animal:{
        type: DataTypes.STRING
    },
    userID:{
        type : DataTypes.INTEGER
    },
    city:{
        type : DataTypes.STRING
    }
},{
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default Petsitter;