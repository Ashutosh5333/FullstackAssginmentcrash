const express = require("express");
const { createPost, GetAllSocialpost, getAllSocialsinglepost, getMyPost, editpost, deletepost } = require("../controllers/social.controller");
const Authenticate = require("../middleware/Authenticate");
const isAdmin = require("../middleware/IsAdmin");
const SocialRouter =  express.Router()

SocialRouter.post("/create",  Authenticate , createPost)

SocialRouter.get("/socialpost/", Authenticate,getMyPost)

SocialRouter.get("/socialpost/:id",  Authenticate, getAllSocialsinglepost)

SocialRouter.patch("/socialupdate/:id", Authenticate, editpost)
SocialRouter.delete("/socialdelete/:id", Authenticate, deletepost)

  // Public 
SocialRouter.get("/social",GetAllSocialpost)


module.exports=SocialRouter