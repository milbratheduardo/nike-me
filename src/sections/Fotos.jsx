import React, { useEffect, useState } from 'react';
import { arrowRight } from '../assets/icons';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { campeonatos_padrao } from '../assets/images';

const Fotos = () => {
  const [selectedCampeonatos, setSelectedCampeonatos] = useState([]);

  useEffect(() => {
    const fetchCampeonatos = async () => {
      try {
        const response = await fetch(`https://painel.zsulesportes.com/campeonatos/`);
        const data = await response.json();
        console.log("Campeonatos: ", data);

        if (data.data && data.data.length > 0) {
          const shuffledCampeonatos = data.data.sort(() => 0.5 - Math.random());
          const selected = shuffledCampeonatos.slice(0, 3);
          setSelectedCampeonatos(selected);
        }
      } catch (error) {
        console.error("Erro ao buscar campeonatos:", error);
      }
    };

    fetchCampeonatos();
  }, []);

  return (
    <section id='fotos' className="max-container flex flex-col items-center gap-9">
      <div className="flex justify-center flex-wrap gap-9">
        {selectedCampeonatos.map((campeonato) => (
          <ServiceCard 
            key={campeonato._id} 
            label={campeonato.name} 
            subtext={campeonato.tipoCompeticao} 
            imgURL={campeonato.pictureBase64 || campeonatos_padrao} 
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-9">
        <Button href='https://dashboard.zsulesportes.com/Campeonatos_lp' label="Ver Fotos" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Fotos;
