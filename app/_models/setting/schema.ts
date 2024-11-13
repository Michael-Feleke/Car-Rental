import mongoose from "mongoose";

const Schema = mongoose.Schema;

const settingSchema = new Schema(
  {
    maxRentDuration: {
      type: Number,
      required: true,
    },
    minRentDuration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default settingSchema;
