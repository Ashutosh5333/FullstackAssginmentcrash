import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignTab from "../pages/SignTab";
import CreatePost from "../pages/CreatePost";
import Edit from "../pages/Edit";
import Deatailpage from "../pages/Deatailpage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/sign" element={<SignTab />} />

        <Route path="/Createpost" element={<CreatePost />} />

        <Route path="/Edit/:id" element={<Edit />} />
        
        <Route path="/deatil/:id" element={<Deatailpage />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
