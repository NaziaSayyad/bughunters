import { Mongoconnect } from "../../../database/db";
import userModel from "../../../models/user.model";

const Users = async (req, res) =>{
    await Mongoconnect();
    const user =  await userModel.find();
    console.log("users", user);
    res.status(201).send(user)
}
export default Users
 //  API :  [http://localhost:3000/api/user]  => JUST FETCH IT  