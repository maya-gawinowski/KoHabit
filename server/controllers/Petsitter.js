import Petsitter from "../models/PetsitterModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getPetSitter = async(req, res) => {
    try {
        console.log('petsit');
        const posts = await Petsitter.findAll({
            attributes:['id','animal', 'city', 'name']
        });
        res.json(posts);
    } catch (error) {
        console.log(error);
    }
}