import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import About from "./component/About";
import Services from "./component/Services";
import Education from "./component/Education";
import Project from "./component/Project";
import Headers from "./component/Header";

function App() {
    return (
        <div>
            <Headers/>
            <About/>
            <Services/>
            <Education/>
            <Project/>
        </div>
    );
}

export default App;
