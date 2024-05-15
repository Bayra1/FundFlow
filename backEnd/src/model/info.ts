import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
    enum: ["Tugrik ₮", "Dollar $"],
    default: "Dollar $",
  },
  budget: {
    type: String,
  },
  readiness: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const InfoModel = mongoose.model("info", InfoSchema);

export { InfoModel };
