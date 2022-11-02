import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout";
import Home from "./Pages/Home/home";
import EmailLayout from "./EmailLayout/EmailLayout";
import {  BrowserRouter,Route, Routes } from "react-router-dom";
import Template from "./Pages/Template";
import ImportContact from "./Pages/ImportContact";


export default function App() {

  return (
    <BrowserRouter>
    <Layout>

    <>
           {/* <EmailLayout/> */}
           <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/email" element={<EmailLayout/>} /> 
           <Route path="/template" element={<Template/>} /> 
           <Route path="/contact" element={<ImportContact/>} /> 
          </Routes> 
    </>     
    </Layout>   
    </BrowserRouter> 
  );
}






           
    