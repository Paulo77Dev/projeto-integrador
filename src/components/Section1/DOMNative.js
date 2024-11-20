import React from "react";
import "./styles.css";

function DOMNative() {
    const handleClick = () => {
        const box = document.getElementById("box-native");
        box.style.backgroundColor = "blue";
        box.style.transform = "translateX(100px)";
    };

    return (
        <div className="section">
            <h2>JavaScript Nativo</h2>
            <button onClick={handleClick}>Mudar Estilo</button>
            <div id="box-native" className="box"></div>
        </div>
    );
}

export default DOMNative;
