import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import "../../Styles/Section4.css";

function AnimeAnimation() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const [speed, setSpeed] = useState(1000);
    const itemsRef = useRef([]);

    // Animar todos os itens sempre que 'items' mudar
    useEffect(() => {
        anime({
            targets: itemsRef.current,
            translateY: [-50, 0],  // Animação de movimento vertical
            elasticity: 600,
            duration: speed,
            delay: anime.stagger(200),  // Espacamento entre as animações dos itens
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
            <button onClick={addItem}>Adicionar Item</button>
            <div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)} // Referência para cada item
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
