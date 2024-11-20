import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "./styles.css";

function Gallery() {
    const galleryRef = useRef();

    useEffect(() => {
        const $gallery = $(galleryRef.current);
        $("#toggleBtn").click(() => {
            $gallery.children("img").fadeToggle();
        });
    }, []);

    return (
        <div className="section">
            <h2>Galeria de Imagens</h2>
            <button id="toggleBtn">Mostrar/Ocultar</button>
            <div ref={galleryRef} className="gallery">
                <img src="https://via.placeholder.com/150" alt="Imagem 1" />
                <img src="https://via.placeholder.com/150" alt="Imagem 2" />
            </div>
        </div>
    );
}

export default Gallery;
