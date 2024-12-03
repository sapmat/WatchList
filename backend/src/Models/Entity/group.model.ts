import { Schema, model, Document, ObjectId } from "mongoose";

export interface Group extends Document {
  _id: ObjectId;
  createdBy: ObjectId;
  name: string;
  description: string;
  films: ObjectId[];
}

const GroupSchema: Schema = new Schema(
  {
    createdBy: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String },
    films: [
      {
        type: Schema.Types.ObjectId,
        ref: "film",
      },
    ],
  },
  { timestamps: true }
);

export const GroupModel = model<Group>("group", GroupSchema);
