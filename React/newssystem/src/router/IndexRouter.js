import React from "react";
import { HashRouter, Navigate, Route,Routes} from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";

export default function indexRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<NewsSandBox />} /> */}
        <Route path="*" element={
          localStorage.getItem("token")?
          <NewsSandBox></NewsSandBox>: 
          <Navigate to="/login"/>
        } />
      </Routes>
    </HashRouter>
  );
}
