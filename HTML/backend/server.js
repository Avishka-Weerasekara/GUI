import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import tbRouter from './routes/tabelRoute.js';



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/reserve",tbRouter)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://avish20weerasekara:<db_password>@cluster0.x6rnn.mongodb.net/?