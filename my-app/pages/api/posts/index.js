import { Mongoconnect } from "../../../database/db";
import user from "../../../models/user.model";
const jwt = require("jsonwebtoken");
export default async function handler (req, res){
     await  Mongoconnect();
     const token = req.headers['authorization'];
    try{
      if(token){
        const decoded = jwt.decode(token);
        const find_id = decoded.id;
        const user_id =  await user.findOne({find_id});
     //    console.log("user",user_id.id)
     //    res.send(decoded.id);

        if(decoded.id ===user_id.id ){
          const id= user_id.id
            const {title, content, image} = req.body;
            const posts =  await user.updateOne({id:id}, {$push: {"myposts": [{title,content, image}]}})
               // await posts.save();
        res.status(201).send({msg:"New post added",posts});
    
        }
        else{
          res.send("No user find")
        }

     }
    }
    catch(e){
     console.log(e);
     res.send("Error", e)
    }
    
}