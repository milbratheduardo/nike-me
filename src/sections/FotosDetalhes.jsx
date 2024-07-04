import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { campeonatos_padrao } from '../assets/images';
import InstCard from '../components/InstCard';

const FotosDetalhes = () => {
  const { id } = useParams();
  const [foto, setFoto] = useState(null);
  const [fotosRelacionadas, setFotosRelacionadas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const response = await fetch(`https://api.zsulesportes.com/fotografo/${id}`);
        const data = await response.json();
        setFoto(data.data);

        const instagram = data.data.instagram;
        const responseAll = await fetch(`https://api.zsulesportes.com/fotografo/`);
        const dataAll = await responseAll.json();
        
        const filteredFotos = dataAll.data.filter(f => f.instagram === instagram);
        setFotosRelacionadas(filteredFotos);
      } catch (error) {
        console.error("Erro ao buscar foto:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFoto();
  }, [id]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (!foto) {
    return <p>Foto não encontrada.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-36">
      <div className="mt-10 w-full flex flex-wrap justify-center gap-6">
        {fotosRelacionadas.map(f => (
          <InstCard 
            key={f._id} 
            label={f.titulo} 
            subtext={f.instagram} 
            imgURL={f.foto || campeonatos_padrao} 
            link={`/fotos/${f._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FotosDetalhes;
