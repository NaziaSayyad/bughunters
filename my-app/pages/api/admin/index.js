import { Mongoconnect } from "../../../database/db";
import userModel from "../../../models/user.model";
const jwt = require("jsonwebtoken");
const sign = process.env.sign;
const Users = async (req, res) => {
  await Mongoconnect();
  const token = req.headers?.authorization?.split(" ")[1]

  if(token){
    const decoded = jwt.verify(token, sign)
    if(decoded){
      if (req.query.name) {
        let val = req.query.name;
        console.log(val)
        val = new RegExp(val);
        const user = await userModel.find({ name: val });
        res.status(201).send(user);
      } else {
        try {
          const user = await userModel.find();
          res.status(201).send(user);
        } catch (err) {
          res.send({ err: err });
        }
      }
    }else{
      res.send({msg: "Please Login"})
    }
  }

 
};

export default Users;

//  API :  [http://localhost:3000/api/user]  => JUST FETCH IT
