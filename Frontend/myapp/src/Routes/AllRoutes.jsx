import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignTab from "../pages/SignTab";
import CreatePost from "../pages/CreatePost";
import Edit from "../pages/Edit";
import Deatailpage from "../pages/Deatailpage";
import About from "../pages/About";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/sign" element={<SignTab />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/dash"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/Createpost"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />

        <Route
          path="/Edit/:id"
          element={
            <PrivateRoute>
              <Edit />
            </PrivateRoute>
          }
        />

        <Route
          path="/deatil/:id"
          element={
            <PrivateRoute>
              <Deatailpage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
