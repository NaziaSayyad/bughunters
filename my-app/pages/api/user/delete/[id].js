import { useRouter } from "next/router";
import { Mongoconnect } from "../../../../database/db";
import userModel from "../../../../models/user.model";

async function user(req, res) {
  const { id } = req.query;
 
  await Mongoconnect();

  if (id) {
    try {
    await userModel.findByIdAndDelete({_id:id})
      res.send({msg: "Deleted Successfully"})
    } catch (err) {
      res.send({ err: err });
    }
  }
}

export default user;
