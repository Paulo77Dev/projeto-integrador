import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "../../Styles/Section2.css";

function Galeria() {
  const galeriaRef = useRef();
  const [urlImagen, setUrlImagen] = useState("");  // Para controlar la URL de la nueva imagen
  const [imagenes, setImagenes] = useState([]);  // Array para almacenar las imágenes

  useEffect(() => {
    const $galeria = $(galeriaRef.current);
    $("#toggleBtn").click(() => {
      $galeria.children("img").fadeToggle();  // Alterna la visibilidad de las imágenes
    });
  }, []);

  // Función para agregar una nueva imagen
  const manejarAgregarImagen = () => {
    if (urlImagen) {
      if (esUrlValida(urlImagen) || esBase64Valido(urlImagen)) {
        setImagenes([...imagenes, urlImagen]);  // Agrega la nueva imagen al array
        setUrlImagen("");  // Limpia el campo de entrada
      } else {
        alert("¡Por favor, ingresa una URL de imagen válida o una cadena base64!");
      }
    }
  };

  // Función para validar la URL de la imagen
  const esUrlValida = (url) => {
    const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))/i;
    return regex.test(url);
  };

  // Función para validar la cadena base64
  const esBase64Valido = (cadena) => {
    // Verifica si la cadena empieza con "data:image"
    const regex = /^data:image\/(png|jpg|jpeg|gif|bmp);base64,/i;
    return regex.test(cadena);
  };

  return (
    <div className="section">
      <h2>Galería de Imágenes</h2>
      <button id="toggleBtn">Mostrar/Ocultar</button>

      {/* Campo para ingresar una nueva imagen */}
      <div>
        <input
          type="text"
          placeholder="URL o base64 de la nueva imagen"
          value={urlImagen}
          onChange={(e) => setUrlImagen(e.target.value)}  // Actualiza el estado con el valor ingresado
        />
        <button onClick={manejarAgregarImagen}>Agregar Imagen</button>
      </div>

      <div ref={galeriaRef} className="galeria">
        {imagenes.map((src, index) => (
          <img key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Galeria;
