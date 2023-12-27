const catchAsyncErrors = require("../middleware/catchError")
const { SocialModel } = require("../models/social.model");

const GetAllSocialpost = catchAsyncErrors(async (req, res) => {
    try {
      const product = await SocialModel.find()
        .populate("postedby",["name"])
      res.send(product);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    
  });
  
  
  
  const getAllSocialsinglepost = catchAsyncErrors(async (req, res) => {
    const prodId = req.params.id;
   
    try {
      const product = await SocialModel.find({  userId: req.userId})
        .populate("postedby", ["name", "email", "image"])
        console.log(product)
      res.send(product);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
  const getMyPost = catchAsyncErrors(async (req, res) => {
        console.log("userid********",req.userId)
    try {
      const productData = await SocialModel.find({ userId: req.userId}).populate("postedby", ["name", "email", "image", "username"]);
      res.send(productData);
    } catch (err) {
      console.log(err);
      res.send("Not authorized");
    }
  });
  
  
  const createPost = async (req, res) => {
    try {
      const userdata = {
        ...req.body,
        postedby: req.userId,
        userId:req.userId
      };
      const instaPost = await SocialModel.create(userdata);
      // console.log("instapost **********data ", instaPost);
      res
        .status(201)
        .json({ message: "Insta post created successfully", data: instaPost });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
      /*** Edit post */
  
  const editpost = catchAsyncErrors(async (req, res) => {
    const prodId = req.params.id;
    const userId = req.userId;
    const payload = req.body;
           console.log("Userid***",userId)
    try {
      const productData = await SocialModel.findOne({ _id: prodId });
        // console.log("productdata*********",productData.userId)
      if (userId !== productData.userId) {
        return res.status(401).send("You are not authorized");
      } else {
        const updatedProduct = await SocialModel.findByIdAndUpdate(
          { _id: prodId },
          payload,
          {
            new: true,
            runValidators: true,
            useFindAndModify: false,
          }
        );
        res.status(200).json({
          success: true,
          msg: "Data updated successfully",
          updatedProduct,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Something went wrong" });
    }
  });
  
   /*** Deleted post */
  
  const deletepost = catchAsyncErrors(async (req, res) => {
    const prodId = req.params.id;
    const userId = req.userId;
  //   console.log("userid*****",userId)
  
    try {
      const productData = await SocialModel.findOne({ _id: prodId });
      console.log("product*****",productData.userId)
      if (userId !== productData.userId) {
        return res.status(401).send("You are not authorized");
      } else {
        await SocialModel.findOneAndDelete({ _id: prodId });
        res.send({ msg: "Post deleted successfully" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Something went wrong" });
    }
  });
  

  module.exports={GetAllSocialpost,getAllSocialsinglepost,getMyPost,createPost,editpost,deletepost}