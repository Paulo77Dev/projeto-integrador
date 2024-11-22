import React, { useState, useEffect } from "react";
import anime from "animejs";
import "../../Styles/Section4.css";

function AnimeAnimation() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const [speed, setSpeed] = useState(1000);

    useEffect(() => {
        anime({
            targets: ".anime-item",
            translateY: [-50, 0],
            elasticity: 600,
            duration: speed,
            delay: anime.stagger(200),
        });
    }, [speed, items]);

    const addItem = () => setItems([...items, `Item ${items.length + 1}`]);

    return (
        <div className="section">
            <h2>Anime.js</h2>
            <input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
            />
            <button onClick={addItem}>Adicionar Item</button>
            <div>
                {items.map((item, index) => (
                    <div key={index} className="anime-item">{item}</div>
                ))}
            </div>
        </div>
    );
}

export default AnimeAnimation;
