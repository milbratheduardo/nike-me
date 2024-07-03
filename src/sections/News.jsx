import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import { campeonatos_padrao } from '../assets/images';

const News = () => {
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
          const ultimasNoticias = data.data.reverse();
          setNoticias(ultimasNoticias);
        }

      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        setIsEmpty(true); 
      }
    };

    fetchNews();
  }, []);

  return (
    <section id='news' className="max-container flex flex-col items-center gap-9 pt-36">
      {isEmpty ? (
        <p></p>
      ) : (
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
      )}
    </section>
  );
};

export default News;
