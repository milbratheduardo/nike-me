import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { campeonatos_padrao } from '../assets/images';

const FotosDetalhes = () => {
  const { id } = useParams();
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/fotografo/${id}`);
        const data = await response.json();
        setFoto(data.data);
      } catch (error) {
        console.error("Erro ao buscar foto:", error);
      }
    };

    fetchFoto();
  }, [id]);

  if (!foto) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-36">
      <img className="w-128 h-64 object-cover rounded-md mb-4" src={foto.foto || campeonatos_padrao} alt={foto.titulo} />
      <h1 className="text-4xl font-bold mb-4 text-center">{foto.titulo}</h1>
      <a href={`https://instagram.com/${foto.instagram}`} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold mb-4 text-center text-blue-600 hover:underline">
        Instagram: {foto.instagram}
      </a>
      <p className="text-lg text-gray-700 leading-relaxed text-center">{foto.nome}</p>
    </div>
  );
};

export default FotosDetalhes;
