import { Mongoconnect } from "../../../../database/db";
import userModel from "../../../../models/user.model";
const jwt = require("jsonwebtoken");
const sign = process.env.sign;
async function add(req, res) {
  await Mongoconnect();
  const payload = req.body;
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, sign);
    if (decoded) {
      const user = new userModel(payload);
      await user.save();

      res.status(201).send({ msg: "ADDED successfully" });
    }
  } else {
    res.send({ err: "Failded to add" });
  }
}

export default add;
