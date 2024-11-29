import React from "react";
import "../../Styles/Section1.css";

function DOMNative() {
    const manejarMoverIzquierda = () => {
        const caja = document.getElementById("box-native");
        caja.style.backgroundColor = "blue";
        caja.style.transform = "translateX(-100px)";
    };

    const manejarMoverDerecha = () => {
        const caja = document.getElementById("box-native");
        caja.style.backgroundColor = "green";
        caja.style.transform = "translateX(100px)";
    };

    return (
        <div className="section">
            <h2>JavaScript Nativo</h2>
            <button onClick={manejarMoverIzquierda}>Mover a la Izquierda</button>
            <button onClick={manejarMoverDerecha}>Mover a la Derecha</button>
            <div id="box-native" className="box"></div>
        </div>
    );
}

export default DOMNative;
