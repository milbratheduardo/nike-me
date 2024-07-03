import React, { useEffect, useState } from 'react';
import { arrowRight } from '../assets/icons';
import NewsCard from '../components/NewsCard';
import Button from '../components/Button';
import { campeonatos_padrao } from '../assets/images';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blog/`);
        const data = await response.json();
        console.log("Noticias: ", data);

        if (data.data.length === 0) {
          setIsEmpty(true);
        } else {
          // Pegar as últimas 3 notícias
          const ultimasNoticias = data.data.reverse().slice(0, 3);
          setNoticias(ultimasNoticias);
        }

      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        setIsEmpty(true);  // Assumir que está vazio em caso de erro
      }
    };

    fetchNews();
  }, []);

  return (
    <section id='news' className="max-container flex flex-col items-center gap-9">
      {isEmpty ? (
        <p></p>
      ) : (
        <>
          <div className="flex justify-center flex-wrap gap-9">
            {noticias.map((noticia) => (
              <NewsCard 
                key={noticia._id} 
                label={noticia.titulo} 
                subtext={noticia.subtitulo} 
                imgURL={noticia.imagem || campeonatos_padrao} 
                link={`/noticias/${noticia._id}`}
              />
            ))}
          </div>
          <div className="w-full flex justify-center mt-9">
            <Button href='/noticias' label="Ver Noticias" iconURL={arrowRight} />
          </div>
        </>
      )}
    </section>
  );
};

export default Noticias;
