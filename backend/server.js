import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/users.js";

dotenv.config()

const port = process.env.PORT || 5000
const uri = process.env.URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB Connected.")
})

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', userRoute)
// app.use('*', (req,res) => res.status(404).json({error: 'Not Found'}))

app.listen(port,() => {
    console.log(`listening to port ${port}`)
})