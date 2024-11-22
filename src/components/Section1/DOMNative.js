import React from "react";
import "../../Styles/Section1.css";

function DOMNative() {
    const handleMoveLeft = () => {
        const box = document.getElementById("box-native");
        box.style.backgroundColor = "blue";
        box.style.transform = "translateX(-100px)";
    };

    const handleMoveRight = () => {
        const box = document.getElementById("box-native");
        box.style.backgroundColor = "green";
        box.style.transform = "translateX(100px)";
    };

    return (
        <div className="section">
            <h2>JavaScript Nativo</h2>
            <button onClick={handleMoveLeft}>Mover para Esquerda</button>
            <button onClick={handleMoveRight}>Mover para Direita</button>
            <div id="box-native" className="box"></div>
        </div>
    );
}

export default DOMNative;
