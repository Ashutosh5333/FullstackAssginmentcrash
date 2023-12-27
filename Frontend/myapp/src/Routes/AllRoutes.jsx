import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignTab from "../pages/SignTab";
import CreatePost from "../pages/CreatePost";
import Edit from "../pages/Edit";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/sign" element={<SignTab />} />
        <Route path="/Createpost" element={<CreatePost />} />

        <Route path="/Edit/:id" element={<Edit />} />
        
      </Routes>
    </>
  );
};

export default AllRoutes;
