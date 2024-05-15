import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
    enum: ["Tugrik ₮", "Dollar $"],
    default: "Dollar $",
  },
  budget: String,
  readiness: Boolean,
});

const InfoModel = mongoose.model("info", InfoSchema);

export { InfoModel };
