import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://avish20weerasekara:Avish2000bud33@cluster0.x6rnn.mongodb.net/html').then(()=>console.log("DB Connected"));
}

