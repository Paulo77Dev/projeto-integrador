import React, { useState } from "react";
import "../../Styles/Section1.css";

function DOMReact() {
    const [estilo, setEstilo] = useState({ backgroundColor: "red", transform: "none" });

    const manejarMoverIzquierda = () => {
        setEstilo({ backgroundColor: "blue", transform: "translateX(-100px)" });
    };

    const manejarMoverDerecha = () => {
        setEstilo({ backgroundColor: "green", transform: "translateX(100px)" });
    };

    return (
        <div className="section">
            <h2>React</h2>
            <button onClick={manejarMoverIzquierda}>Mover a la Izquierda</button>
            <button onClick={manejarMoverDerecha}>Mover a la Derecha</button>
            <div className="box" style={estilo}></div>
        </div>
    );
}

export default DOMReact;
