import { useRouter } from "next/router";
import { Mongoconnect } from "../../../../database/db";
import userModel from "../../../../models/user.model";
const jwt = require("jsonwebtoken");
const sign = process.env.sign;
async function user(req, res) {
  const { id } = req.query;
  const token = req.headers?.authorization?.split(" ")[1]

  await Mongoconnect();

  if (id && token) {
    const decoded = jwt.verify(token, sign);

   if(decoded){
    try {
      await userModel.findByIdAndDelete({_id:id})
        res.send({msg: "Deleted Successfully"})
      } catch (err) {
        res.send({ err: err });
      }
   }else{
    res.send({err: err})
   }
  }
}

export default user;
