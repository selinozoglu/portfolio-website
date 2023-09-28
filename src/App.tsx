import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Header from "./components/header";
import {useDispatch} from "react-redux";
import TestingComp from "./components/testComponents/testing-comp/testing-comp";

function App() {
    // const dispatch = useDispatch();
    return (
        <Router>
            <Header/>
            <div className="App bg-b" id="wave">
               <TestingComp/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/blog`} element={<Blog/>}/>
                    <Route path={`/about`} element={<About/>}/>
                    <Route path={`/contact`} element={<Contact/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>

                </Routes>
            </div>
        </Router>
    );
}

export default App;
