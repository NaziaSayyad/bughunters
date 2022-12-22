import { model, models, Schema } from "mongoose";

const postSchema = new Schema({
    
    title:String,
    image : String,
    content : String

});
export default models.postModel || model("post", postSchema);