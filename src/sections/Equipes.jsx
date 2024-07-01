import React, { useEffect, useState } from 'react';
import EquipeCard from '../components/EquipeCard';
import { campeonatos_padrao } from '../assets/images'; // Certifique-se de ajustar o caminho da imagem padrão, se necessário


const instagramLinks = {
  "60d0fe4f5311236168a109ca": "https://instagram.com/teamA",
  "60d0fe4f5311236168a109cb": "https://instagram.com/teamB",
  "60d0fe4f5311236168a109cc": "https://instagram.com/teamC",
  // Adicione mais mapeamentos conforme necessário
};

const Equipes = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(`https://painel.zsulesportes.com/users/`);
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
          />
        ))}
      </div>
    </section>
  );
};

export default Equipes;
