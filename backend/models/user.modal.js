import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
    // email:{
    //     type: String,
    //     required: true
    // },
    // dob:{
    //     type: Date,
    //     required: true
    // },
    // gender:{
    //     type: String,
    //     required: true
    // },
    // mobnumber:{
    //     type: Number,
    //     required: true
    // },
    // password:{
    //     type: String,
    //     required: true
    // }
})

const User = mongoose.model('User',userSchema)


export default User