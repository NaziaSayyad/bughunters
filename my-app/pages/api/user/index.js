import { Mongoconnect } from "../../../database/db";
import userModel from "../../../models/user.model";

const Users = async (req, res) => {
  await Mongoconnect();
  
  if (req.query.name) {
    let val = req.query.name;
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
};

export default Users;

//  API :  [http://localhost:3000/api/user]  => JUST FETCH IT
