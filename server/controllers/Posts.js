import Post from "../models/PostModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getPosts = async(req, res) => {
    try {
        const posts = await Post.findAll({
            attributes:['id','typ','animal', 'dateFrom', 'dateTo', 'city', 'name']
        });
        res.json(posts);
    } catch (error) {
        console.log(error);
    }
}