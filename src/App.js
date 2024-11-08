import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieGallery from "./components/MovieGallery";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>    
        <Route path='/' element={
      <>
      <Header /> 
      <Banner /> 
      <MovieGallery/>
      
      
      </>
     }
        

        
    />


<Route path='/signup' element={
      <>
    <SignUp/>
      </>
     }
        

        
    />
    <Route path='/loginpage' element={
      <>
    <LoginPage/>
      </>
     }
        

        
    />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
