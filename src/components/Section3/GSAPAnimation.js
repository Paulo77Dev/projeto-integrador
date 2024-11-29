import React, { useState } from "react";
import { gsap } from "gsap";
import "../../Styles/Section3.css";

function GSAPAnimation() {
    const [position, setPosition] = useState("middle"); // Posição inicial: meio

    const handleAnimation = () => {
        let xValue = 0; // Valor inicial para o movimento
        let scaleValue = 1; // Valor inicial para escala
        let color = "red"; // Cor padrão

        if (position === "middle") {
            // Vai para direita
            xValue = 100;
            scaleValue = 1.5;
            color = "green";
            setPosition("right");
        } else if (position === "right") {
            // Vai para esquerda
            xValue = -100;
            scaleValue = 1.5;
            color = "blue";
            setPosition("left");
        } else if (position === "left") {
            // Volta para o meio
            xValue = 0;
            scaleValue = 1;
            color = "red";
            setPosition("middle");
        }

        gsap.to(".box-gsap", {
            x: xValue,
            scale: scaleValue,
            backgroundColor: color,
            duration: 1,
        });
    };

    return (
        <div className="section">
            <h2>GSAP</h2>
            <button onClick={handleAnimation}>Animar</button>
            <div className="box-gsap"></div>
        </div>
    );
}

export default GSAPAnimation;
    