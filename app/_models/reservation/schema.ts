import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    numberOfDays: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => value > 0,
        message: "Number of days must be greater than 0",
      },
    },
    totalPrice: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => value >= 0,
        message: "Total price must be non-negative",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default reservationSchema;
