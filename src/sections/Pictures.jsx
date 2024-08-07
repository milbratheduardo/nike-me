import React, { useEffect, useState } from 'react';
import { campeonatos_padrao } from '../assets/images';
import PicCard from '../components/PicCard';
import PicGaleria from '../components/PicGaleria';
import Footer from './Footer';

const Pictures = () => {
  const [fotos, setFotos] = useState([]);
  const [portoFotos, setPortoFotos] = useState([]);
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
          const filteredData = data.data.filter(foto => foto.instagram !== "porto");
          const portoData = data.data.filter(foto => foto.instagram === "porto");

          if (filteredData.length === 0) {
            setIsEmpty(true);
          } else {
            const groupedFotos = groupByInstagram(filteredData);
            setFotos(groupedFotos);
          }
          setPortoFotos(portoData);
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
        <>
        <div className="flex justify-center flex-wrap gap-9 mt-10">
          {fotos.map((foto) => (
            <PicCard 
              key={foto.foto._id} 
              nome={foto.foto.nome}
              label={foto.foto.instagram} 
              instagram={foto.foto.titulo}
              subtext={`Quantidade de fotos: ${foto.count}`} 
              imgURL={foto.foto.foto || campeonatos_padrao} 
              link={`/fotos/${foto.foto._id}`}
            />
          ))}
        </div>
        {portoFotos.length > 0 && (
            <div className="mt-10 w-full">
              <h3 className="font-palanquin text-center text-4xl font-bold mt-10">
                <span className="text-gold">Galeria ZSul Esportes</span>
              </h3>
              <div className="flex justify-center flex-wrap gap-9 mt-6">
                {portoFotos.map((foto) => (
                  <PicGaleria 
                    key={foto._id} 
                    nome={foto.nome}
                    label={foto.instagram} 
                    imgURL={foto.foto || campeonatos_padrao} 
                    link={`/fotos/${foto._id}`}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </section>
  );
};

export default Pictures;
