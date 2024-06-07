import { sobre } from '../assets/images';
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center 
      max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl 
          capitalize font-bold lg:max-w-lg">
            Sobre
          <span className="text-gold ml-4">Nós</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          A Z Sul Esportes é uma empresa especializada na organização de eventos esportivos, 
          com vasta experiência em campeonatos de futebol de base. Desde 2019, 
          somos responsáveis pelos maiores campeonatos de futebol de base na 
          região Sul do Estado do Rio Grande do Sul, atendendo crianças de 9 a 17 anos. <br /><br />
          Nossa trajetória inclui a participação de mais de 40 equipes regionais, 
          o apoio de mais de 10 marcas patrocinadoras e a realização de competições em mais de 6 cidades. 
          Priorizamos a qualidade dos nossos eventos, oferecendo oportunidades para que meninos e 
          meninas da região Sul sigam seus sonhos de se tornarem atletas profissionais. 
          Além disso, atuamos ativamente na educação e formação dessas crianças, contribuindo para o seu desenvolvimento integral.
        </p>

      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={sobre}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />

      </div>

    </section>
  )
}

export default SuperQuality