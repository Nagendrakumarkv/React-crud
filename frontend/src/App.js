import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddEdit/>}/>
          <Route path='/update/:id' element={<AddEdit/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/view/:id' element={<View/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
