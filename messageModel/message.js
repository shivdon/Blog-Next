import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  email: String,
  name: String,
  message: String,
});

export const Message = mongoose.model("Message", messageSchema);
