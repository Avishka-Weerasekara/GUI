import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://avish20weerasekara:Avish2000bud33@cluster0.x6rnn.mongodb.net/html');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1);
  }
};