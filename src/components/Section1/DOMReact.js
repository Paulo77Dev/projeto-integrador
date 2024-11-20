import React, { useState } from "react";
import "./styles.css";

function DOMReact() {
    const [style, setStyle] = useState({ backgroundColor: "red", transform: "none" });

    const handleClick = () => {
        setStyle({ backgroundColor: "blue", transform: "translateX(100px)" });
    };

    return (
        <div className="section">
            <h2>React</h2>
            <button onClick={handleClick}>Mudar Estilo</button>
            <div className="box" style={style}></div>
        </div>
    );
}

export default DOMReact;
