import React, { useEffect, useState } from 'react';
import EquipeCard from '../components/EquipeCard';
import { campeonatos_padrao } from '../assets/images'; // Certifique-se de ajustar o caminho da imagem padrão, se necessário


const instagramLinks = {
  "660d56e7f5dd731f1bd4c3cf": "https://www.instagram.com/escoladogremioriogrande/",
  "6610186567fb7d2aae70c094": "https://www.instagram.com/ong_porto/",
  "6610189a67fb7d2aae70c099": "https://www.instagram.com/esc.fut_pelotas/",
  "661018c967fb7d2aae70c09e": "https://www.instagram.com/escola.avante.rg/",
  "661018f667fb7d2aae70c0a3": "https://www.instagram.com/g.e.nacional/",
  "661019ef67fb7d2aae70c0a8": "https://www.instagram.com/meninosdoparque_/",
  "66101a4b67fb7d2aae70c0ad": "https://www.instagram.com/escolaxavante/",
  "66101a7567fb7d2aae70c0b2": "https://www.instagram.com/basedoguarany/",
  "66101a9a67fb7d2aae70c0b7": "https://www.instagram.com/garotos_dalagoa/",
  "66101afa67fb7d2aae70c0bc": "https://www.instagram.com/ebfaofc/",
  "66101b1c67fb7d2aae70c0c1": "https://www.instagram.com/progressofc/",
  "66101b5267fb7d2aae70c0c6": "#",
  "66101b7667fb7d2aae70c0cb": "https://www.instagram.com/caciquexavante/",
  "66101b9a67fb7d2aae70c0d0": "https://www.instagram.com/scsaopaulors/",
  "6614503feeb22206f4e07283": "https://www.instagram.com/escoladefutguaranyfclube"
};

const Equipes = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(`https://api.zsulesportes.com/users/`);
        const data = await response.json();
        console.log("Usuarios: ", data);

        const filteredUsuarios = data.data.filter(usuario => usuario.permission === 'TEquipe');
        setUsuarios(filteredUsuarios);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <section id='' className="max-container flex flex-col items-center gap-4 pt-36">
      <div className="flex justify-center flex-wrap gap-9">
        {usuarios.map((usuario) => (
          <EquipeCard 
            key={usuario._id} 
            label={usuario.teamName} 
            subtext={usuario.city} 
            imgURL={usuario.pictureBase64 || campeonatos_padrao} 
            href={instagramLinks[usuario._id] || '#'}
            id = {usuario._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Equipes;
