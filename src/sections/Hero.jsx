import { useState } from "react";
import { statistics } from '../constants';
import { bigShoe1 } from '../assets/images';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
    <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-9 pr-10'>
            Zona Sul
        </span>
        <br />
        <span className='text-gold inline-block mt-3'>Esportes</span>
    </h1>
    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Somos uma empresa especializada em gerenciamento de campeonatos de base.
    </p>


        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-8'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    <div className="relative flex-1 flex justify-center
    items-center xl:min-h-screen max-xl:py-40">
      <img
       src={bigShoeImg}
       alt="Gear Collection"
       width={610}
       height={500}
       className="object-contain relative z-10"
       />
    </div>
    </section>
  )
}

export default Hero