import mongoose from "mongoose";
import { Message } from "../../messageModel/message";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim === "" ||
      !message ||
      message.trim === ""
    ) {
      res.status(422).json({ message: "Invalid Input.." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    let result;

    try {
      client = await mongoose.connect(process.env.DATABASE.toString(), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
    } catch (err) {
      console.log(err);
      return;
    }

    if (client) {
      console.log("DB CONNECTED...");
    }

    try {
      result = await new Message({
        email,
        name,
        message,
      }).save();
      console.log("result ===>  ", result);
    } catch (err) {
      console.log("error Found While Saving data...", err);
      res.status(411).send({ error: "Error Occured While Sending..Try Again" });
    }

    console.log(newMessage);

    res.status(200).json({ message: "Email Sent Successfully" });
  }
};

export default handler;
