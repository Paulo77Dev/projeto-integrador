import React from "react";
import DOMNative from "./components/Section1/DOMNative";
import DOMReact from "./components/Section1/DOMReact";
import Gallery from "./components/Section2/Gallery";
import GSAPAnimation from "./components/Section3/GSAPAnimation";
import AnimeAnimation from "./components/Section4/AnimeAnimation";
import "./Styles/App.css";

function App() {
    return (
        <div>
            <h1>Trabalho Integrador</h1>
            <DOMNative />
            <DOMReact />
            <Gallery />
            <GSAPAnimation />
            <AnimeAnimation />
        </div>
    );
}

export default App;
