import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Post = db.define('posts',{
    typ:{
        type: DataTypes.STRING
    },
    zip:{
        type: DataTypes.INTEGER
    },
    date:{
        type: DataTypes.DATETIME
    },
    animal:{
        type: DataTypes.STRING
    },
    userID:{
        type : DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default Posts;