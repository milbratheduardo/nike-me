import React, { useEffect, useState } from 'react';
import { campeonatos_padrao } from '../assets/images';
import PicCard from '../components/PicCard';

const Pictures = () => {
  const [fotos, setFotos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const response = await fetch(`https://api.zsulesportes.com/fotografo/`);
        const data = await response.json();
        console.log("Fotos: ", data);

        if (data.data.length === 0) {
          setIsEmpty(true);
        } else {
          const groupedFotos = groupByInstagram(data.data);
          setFotos(groupedFotos);
        }
      } catch (error) {
        console.error("Erro ao buscar fotos:", error);
        setIsEmpty(true);
      }
    };

    fetchFoto();
  }, []);

  const groupByInstagram = (data) => {
    const grouped = data.reduce((acc, foto) => {
      if (!acc[foto.instagram]) {
        acc[foto.instagram] = { count: 0, foto };
      }
      acc[foto.instagram].count++;
      return acc;
    }, {});

    return Object.values(grouped);
  };

  return (
    <section id='fotos' className="max-container border-t border-gold flex flex-col items-center gap-9 pt-36">
      {isEmpty ? (
        <p>Nenhuma foto encontrada.</p>
      ) : (
        <div className="flex justify-center flex-wrap gap-9 mt-10">
          {fotos.map((foto) => (
            <PicCard 
              key={foto.foto._id} 
              label={foto.foto.instagram} 
              subtext={`Quantidade de fotos: ${foto.count}`} 
              imgURL={foto.foto.foto || campeonatos_padrao} 
              link={`/fotos/${foto.foto._id}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Pictures;
