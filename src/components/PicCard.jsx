import React from 'react';
import { arrowRight } from '../assets/icons';
import ButtonOut from '../components/ButtonOut';

const PicCard = ({ imgURL, label, subtext, link, nome, instagram }) => {
  const formattedLabel = label.startsWith('http://') || label.startsWith('https://') 
    ? label 
    : `https://${label}`;

  const formattedInstagram = instagram.startsWith('http://') || instagram.startsWith('https://') 
    ? instagram 
    : `https://${instagram}`;

  const handleImageClick = () => {
      window.location.href = formattedInstagram;
  }  
  
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col items-center'>
        <div className='w-[200px] h-[200px] flex justify-center items-center rounded-full overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-110'
          onClick={handleImageClick}>
            <img src={imgURL} alt={label} width={200} height={200} className="object-cover"/>
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold text-center'>{nome}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center'>{label}</p>
    
        <div className="w-full flex justify-center mt-9">
        <ButtonOut href= {formattedLabel} label="Veja!" iconURL={arrowRight} />
      </div>
    </div>
  )
}

export default PicCard;
