import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import Add from "./components/Add";
import Edit from "./components/edit";
import Login from "./components/login";
import Remove from "./components/Removee";
import Update from "./components/Update";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path ="/login" element={<Login/>}></Route>
          <Route path="/books" element={<Books/>}></Route>
          <Route path="/Add" element={<Add/>}></Route>
          <Route path="/Remove" element={<Remove/>}></Route>
          <Route path="/edit" element={<Edit/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}
