import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import About from "./component/About";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Project from "./component/Project";
import Headers from "./component/Header";

function App() {
    return (
        <div>
            <Headers/>
            <About/>
            <Experience/>
            <Education/>
            <Project/>
        </div>
    );
}

export default App;
