import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "../../Styles/Section2.css";

function Gallery() {
  const galleryRef = useRef();
  const [imageURL, setImageURL] = useState("");  // Para controlar a URL da nova imagem
  const [images, setImages] = useState([]);  // Array para armazenar as imagens

  useEffect(() => {
    const $gallery = $(galleryRef.current);
    $("#toggleBtn").click(() => {
      $gallery.children("img").fadeToggle();  // Alterna a visibilidade das imagens
    });
  }, []);

  // Função para adicionar uma nova imagem
  const handleAddImage = () => {
    if (imageURL) {
      if (isValidURL(imageURL) || isValidBase64(imageURL)) {
        setImages([...images, imageURL]);  // Adiciona a nova imagem ao array
        setImageURL("");  // Limpa o campo de input
      } else {
        alert("Por favor, insira uma URL válida de imagem ou uma string base64!");
      }
    }
  };

  // Função para validar a URL da imagem
  const isValidURL = (url) => {
    const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))/i;
    return regex.test(url);
  };

  // Função para validar a string base64
  const isValidBase64 = (string) => {
    // Verifica se a string começa com "data:image"
    const regex = /^data:image\/(png|jpg|jpeg|gif|bmp);base64,/i;
    return regex.test(string);
  };

  return (
    <div className="section">
      <h2>Galeria de Imagens</h2>
      <button id="toggleBtn">Mostrar/Ocultar</button>

      {/* Campo para inserir uma nova imagem */}
      <div>
        <input
          type="text"
          placeholder="URL ou base64 da nova imagem"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}  // Atualiza o estado com o valor inserido
        />
        <button onClick={handleAddImage}>Adicionar Imagem</button>
      </div>

      <div ref={galleryRef} className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
