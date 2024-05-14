import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
    enum: ["tugrik", "dollar"],
    default: "tugrik",
  },
  budget: Number,
  readiness: Boolean,
});

const InfoModel = mongoose.model("info", InfoSchema);

export { InfoModel };
