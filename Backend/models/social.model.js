const mongoose = require("mongoose");


const SocalSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please provide a description"],
      minlength: [10, "Description should be at least 10 characters long"],
      maxlength: [200, "Description should not exceed 200 characters"],
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
      minlength: [5, "Title should be at least 5 characters long"],
      maxlength: [50, "Title should not exceed 50 characters"],
    },
    pic: {
      type: [String],
      default: ["default-pic.jpg"],
    },
    userId: {
      type: String,
      required:true
    },
    postedby: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: [true, "Please provide the ID of the user who posted"],
    },
  },
  {
    timestamps: true,
  }
);

const SocialModel = mongoose.model("social", SocalSchema);

module.exports = {
  SocialModel,
};
