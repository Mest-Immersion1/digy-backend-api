import mongoose, { model, mongo, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userProfileSchema = new Schema({
    name: {type: String},
    about: { type: String},
    location: { type: String },
    contact: {type: String },
    image: {type: String},
    profileimage: { type: String },
    user: {type: mongoose.Schema.Types.ObjectId , ref: 'User', select: false}

},{
    timestamps: true
})

userProfileSchema.plugin(toJSON);
export const userProfile = model('Profile', userProfileSchema);