import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Post = db.define('posts',{
    typ:{
        type: DataTypes.STRING
    },
    name:{
        type : DataTypes.STRING
    },
    dateFrom:{
        type: DataTypes.DATE
    },
    dateTo:{
        type: DataTypes.DATE
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

export default Post;