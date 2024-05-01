import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
    },
    isShop: {
      type: Boolean,
      default: false,
    },
    shop: {
      type: String,
    },
    cart: {
      type: [String],
    },
    orders: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
