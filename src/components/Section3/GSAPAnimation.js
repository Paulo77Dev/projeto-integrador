import React, { useState } from "react";
import { gsap } from "gsap";
import "./styles.css";

function GSAPAnimation() {
    const [animating, setAnimating] = useState(false);

    const handleAnimation = () => {
        if (!animating) {
            gsap.to(".box-gsap", { backgroundColor: "green", scale: 1.5, x: 200, duration: 2 });
        } else {
            gsap.to(".box-gsap", { backgroundColor: "red", scale: 1, x: 0, duration: 2 });
        }
        setAnimating(!animating);
    };

    return (
        <div className="section">
            <h2>GSAP</h2>
            <button onClick={handleAnimation}>Animar</button>
            <div className="box-gsap box"></div>
        </div>
    );
}

export default GSAPAnimation;