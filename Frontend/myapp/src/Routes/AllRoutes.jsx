import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignTab from "../pages/SignTab";
import CreatePost from "../pages/CreatePost";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/sign" element={<SignTab />} />
        <Route path="/Createpost" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
