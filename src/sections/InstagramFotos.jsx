import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PicCard from '../components/PicCard';
import { campeonatos_padrao } from '../assets/images';

const InstagramFotos = () => {
  const { instagram } = useParams();
  const [fotos, setFotos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const response = await fetch(`https://api.zsulesportes.com/fotografo/`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fotos: ", data);

        const filteredFotos = data.data.filter(foto => foto.instagram === instagram);

        if (filteredFotos.length === 0) {
          setIsEmpty(true);
        } else {
          setFotos(filteredFotos);
        }
      } catch (error) {
        console.error("Erro ao buscar fotos:", error);
        setIsEmpty(true);
      }
    };

    fetchFotos();
  }, [instagram]);

  return (
    <section id='fotos' className="max-container border-t border-gold flex flex-col items-center gap-9 pt-36">
      {isEmpty ? (
        <p>Nenhuma foto encontrada.</p>
      ) : (
        <div className="flex justify-center flex-wrap gap-9 mt-10">
          {fotos.map((foto) => (
            <PicCard 
              key={foto._id} 
              label={foto.titulo} 
              subtext={foto.instagram} 
              imgURL={foto.foto || campeonatos_padrao} 
              link={`/fotos/${foto._id}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default InstagramFotos;
