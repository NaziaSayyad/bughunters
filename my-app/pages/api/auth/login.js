import { Mongoconnect } from "../../../database/db";
import user from "../../../models/user.model";

const jwt = require("jsonwebtoken")
const sign = process.env.sign;

export default async function Login (req,res){
 try{
    await Mongoconnect();
        const {email, password} = req.body;
        let  get_user =  await user.findOne({email});
            console.log(get_user);
    if(get_user){
         const token = jwt.sign(
            {id: get_user._id, sub:"bla-bla- blue- blue", name: get_user.name, role : get_user.role}, sign,{expiresIn : "7 days"})
    // console.log(get_user)
    return res.send({msg : "Login sucessfully", token : token, role :get_user.role});

 }
 else {
    res.send({ msg: "error, You need to signup first" });
  }
 } catch(e){

 }

 }