const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config()

const port = process.env.PORT || 5000

const uri = process.env.URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})


const app = express()
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
