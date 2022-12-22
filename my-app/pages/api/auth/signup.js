import { Mongoconnect } from "../../../database/db";
import user from "../../../models/user.model";

const jwt = require("jsonwebtoken");
export default  async function  Signup (req,res){
        await Mongoconnect();
       
        const {name, email, password} = req.body;
        let  new_users  = new user({ name , email, password});
        await new_users.save();
        return  res.status(201).send("User created Sucessfully")
        
}