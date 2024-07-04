import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { campeonatos_padrao } from '../assets/images';

const NoticiaDetalhes = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await fetch(`https://api.zsulesportes.com/blog/${id}`);
        const data = await response.json();
        setNoticia(data.data);
      } catch (error) {
        console.error("Erro ao buscar notícia:", error);
      }
    };

    fetchNoticia();
  }, [id]);

  if (!noticia) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="noticia-detalhe max-w-4xl mx-auto p-6 pt-36">
      <img className="w-128 h-64 object-cover rounded-md mb-4 mx-auto" src={noticia.imagem || campeonatos_padrao} alt={noticia.titulo} />
      <h1 className="text-4xl font-bold mb-4">{noticia.titulo}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{noticia.texto}</p>
    </div>
  );
};

export default NoticiaDetalhes;
