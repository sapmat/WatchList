import mongoose, { Document, Schema, ObjectId } from "mongoose";

export interface PartialUser {
  username: string;
  password: string;
  displayName: string;
}

export interface User extends Document {
  _id: ObjectId;
  username: string;
  password: string;
  displayName: string;
  groups: ObjectId[];
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "group",
      },
    ],
  },
  { autoIndex: true, timestamps: true }
);

export default mongoose.model<User>("user", UserSchema);
