import React from 'react';
import './App.css';
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AccordionNoDivider from './Screens/Accordion/Accordion';
import Home from './Screens/Home/Home';
import ColorGenerator from './Screens/ColorGenarator/ColorGenerator';


function App() {
  return (
    <Router>
    
    <Header/>
   <Layout>
   <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/accordion' element={<AccordionNoDivider/>}/>
      <Route path='/colorGenerator' element={<ColorGenerator/>}/>
    </Routes>
    </Layout>
    <Footer/>
  
    </Router>
  );
}

export default App;
