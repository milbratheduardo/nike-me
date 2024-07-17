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
        const response = await fetch(`https://api.zsulesportes.com/fotografo/`);
        const data = await response.json();
        console.log("Fotos: ", data);

        if (data.data.length === 0) {
          setIsEmpty(true);
        } else {
          // Filtra as fotos onde instagram !== "porto"
          const fotosFiltradas = data.data.filter(foto => foto.instagram !== "porto");
          if (fotosFiltradas.length === 0) {
            setIsEmpty(true);
          } else {
            const ultimasFotos = fotosFiltradas.reverse().slice(0, 3);
            setFoto(ultimasFotos);
          }
        }

      } catch (error) {
        console.error("Erro ao buscar fotos:", error);
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
          <h3 className="font-palanquin text-center text-4xl font-bold mt-10"> 
            <span className="text-gold"> Fotos </span>
          </h3>
          <div className="flex justify-center flex-wrap gap-9 mt-10">
            {fotos.map((foto) => (
              <FotoCard 
                key={foto._id} 
                label={foto.nome}
                subtext={foto.instagram} 
                imgURL={foto.foto || campeonatos_padrao} 
                link={`/fotos/${foto._id}`}
              />
            ))}
          </div>
          <div className="w-full flex justify-center mt-9">
            <Button href='/fotos' label="Ver Fotos" iconURL={arrowRight} />
          </div>
        </>
      )}
    </section>
  );
};

export default Fotos;
