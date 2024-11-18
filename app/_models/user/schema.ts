import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
    },
    countryFlag: {
      type: String,
    },
    drivingLicense: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
