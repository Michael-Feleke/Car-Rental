import mongoose from "mongoose";

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    dailyPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      required: true,
    },
    customerReviews: [
      {
        name: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
      },
    ],
    engine: {
      type: {
        type: String,
        required: true,
      },
      horsepower: {
        type: Number,
        required: true,
      },
      torque: {
        type: String,
        required: true,
      },
    },
    features: {
      transmission: {
        type: String,
        required: true,
      },
      infotainment: {
        type: String,
        required: true,
      },
      safety: [
        {
          type: String,
          required: true,
        },
      ],
      autonomyLevel: {
        type: String,
        required: true,
      },
    },
    performance: {
      acceleration: {
        type: String,
        required: true,
      },
      topSpeed: {
        type: String,
        required: true,
      },
      fuelType: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default carSchema;
