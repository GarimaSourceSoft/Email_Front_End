import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Layout from "./Layout";
import Home from "./Pages/Home/home";
import EmailLayout from "./EmailLayout/EmailLayout";
import {  BrowserRouter,Route, Routes } from "react-router-dom";


export default function App() {

  return (
    <BrowserRouter>
    {/* <Layout> */}

    <>
           {/* <EmailLayout/> */}
           <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="emails" element={<EmailLayout/>} /> 
          </Routes> 
    </>     
    {/* </Layout>    */}
    </BrowserRouter> 
  );
}






           
    