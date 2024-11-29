import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import "../../Styles/Section4.css";

function AnimeAnimation() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const [speed, setSpeed] = useState(1000);
    const itemsRef = useRef([]);

    // Animar todos los elementos siempre que 'items' cambie
    useEffect(() => {
        anime({
            targets: itemsRef.current,
            translateY: [-50, 0],  // Animación de movimiento vertical
            elasticity: 600,
            duration: speed,
            delay: anime.stagger(200),  // Espaciado entre las animaciones de los elementos
        });
    }, [speed, items]);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div className="section">
            <h2>Anime.js</h2>
            <input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
            />
            <button onClick={addItem}>Agregar Elemento</button>
            <div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)} // Referencia para cada elemento
                        className="anime-item"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnimeAnimation;
