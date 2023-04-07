import mongoose from 'mongoose';

const collectionName : string = "users";

const UserSchema : mongoose.Schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type:String, select: false},
    sessionToken: { type:String, select: false}
  }
})

export const UserModel = mongoose.model(collectionName, UserSchema);
