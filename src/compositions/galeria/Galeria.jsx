import React, { useState, useEffect, useRef } from 'react';
import Section from "../../components/v2/conteiners/Section";
import Mosaic from "../../components/v2/conteiners/Mosaic";

import { theme } from "../../styles/theme";

import api from "../../services/index";

export default function Galeria() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);
  useEffect(() => {
    // Função para buscar imagens da API
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/gallery?page=${page}`); // Substitua pela URL da sua API
        setImages((prevImages) => [...prevImages, ...response.data.images]); // Ajuste conforme a estrutura da resposta
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page]);

  useEffect(() => {
    // Função para verificar se o usuário chegou ao final da página
    const handleScroll = () => {
      if (loaderRef.current) {
        const { bottom } = loaderRef.current.getBoundingClientRect();
        if (bottom <= window.innerHeight) {
          // setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section className="pd-bottom" bgColor={theme.colors.black}>
      <Mosaic>
        <h2>Galeria</h2>
        <div className="galeria-description">
          {images.map((img) => (
            <a
              key={img.url}
              href={img.url}
              className={img.url.search("span-2") !== -1 ? "span-2" : ""}
              target="_blank"
            >
              <img src={img.url} alt={img.alt || "Foto tirada por Beatriz Romano"} />
            </a>
          ))}
        </div>
      </Mosaic>
    </Section>
  );
}
