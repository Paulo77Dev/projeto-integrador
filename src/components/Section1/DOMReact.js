import React, { useState } from "react";
import "../../Styles/Section1.css";

function DOMReact() {
    const [style, setStyle] = useState({ backgroundColor: "red", transform: "none" });

    const handleMoveLeft = () => {
        setStyle({ backgroundColor: "blue", transform: "translateX(-100px)" });
    };

    const handleMoveRight = () => {
        setStyle({ backgroundColor: "green", transform: "translateX(100px)" });
    };

    return (
        <div className="section">
            <h2>React</h2>
            <button onClick={handleMoveLeft}>Mover para Esquerda</button>
            <button onClick={handleMoveRight}>Mover para Direita</button>
            <div className="box" style={style}></div>
        </div>
    );
}

export default DOMReact;
