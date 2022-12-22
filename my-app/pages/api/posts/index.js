import { Mongoconnect } from "../../../database/db";
import post from "../../../models/post.model";
import user from "../../../models/user.model";
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  await Mongoconnect();
  const token = req.headers["authorization"];
  try {
    if (token) {
      const decoded = jwt.decode(token);
      const find_id = decoded.id;
      const user_id = await user.findOne({ _id: find_id });
      // console.log("user",user_id)
      // res.send(user_id);

      if (decoded.id === user_id.id) {
        const id = user_id.id;
        const { category, title, content, image } = req.body;
        const posts = await user.updateOne(
          { id: id },
          { $push: { myposts: [{ title, content, image }] } }
        );
        const post_model = await post({
          id: id,
          user_name: user_id.name,
          category,
          title,
          content,
          image,
        });
        await post_model.save();
        res.status(201).send({ msg: "New post added", posts, post_model });
      } else {
        res.send("No user find");
      }
    }
  } catch (e) {
    console.log(e);
    res.send("Error", e);
  }
}
