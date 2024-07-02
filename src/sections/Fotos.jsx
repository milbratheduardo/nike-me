import React, { useEffect, useState } from 'react';
import { arrowRight } from '../assets/icons';
import FotoCard from '../components/FotoCard';
import Button from '../components/Button';
import { campeonatos_padrao } from '../assets/images';

const Fotos = () => {
  const [fotos, setFoto] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/fotografo/`);
        const data = await response.json();
        console.log("Fotos: ", data);

        if (data.data.length === 0) {
          setIsEmpty(true);
        } else {
        const ultimasFotos = data.data.reverse().slice(0, 3);
        setFoto(ultimasFotos);
        }

      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchFoto();
  }, []);

  return (
    <section id='fotos' className="max-container border-t border-gold flex flex-col items-center gap-9">
      {isEmpty ? (
        <p></p>
      ) : (
        <>
      <div className="flex justify-center flex-wrap gap-9 mt-10">
        {fotos.map((foto) => (
          <FotoCard 
            key={foto._id} 
            label={foto.titulo} 
            subtext={foto.instagram} 
            imgURL={foto.foto || campeonatos_padrao} 
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-9">
        <Button href='https://dashboard.zsulesportes.com/Campeonatos_lp' label="Ver Fotos" iconURL={arrowRight} />
      </div>
      </>
      )}
    </section>
  );
};

export default Fotos;
