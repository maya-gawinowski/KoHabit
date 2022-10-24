import Posts from "../models/PostModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getPosts = async(req, res) => {
    try {
        const posts = await Posts.findAll({
            attributes:['id','typ','animal', 'userID']
        });
        res.json(posts);
    } catch (error) {
        console.log(error);
    }
}