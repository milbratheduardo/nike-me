import React from 'react';
import { arrowRight } from '../assets/icons';
import ButtonOut from '../components/ButtonOut';

const PicGaleria = ({ imgURL, label, subtext, link, nome }) => {
  const formattedSubtext = label.startsWith('http://') || label.startsWith('https://') 
    ? label 
    : `https://${label}`;
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col items-center'>
        <div className='w-[200px] h-[200px] flex justify-center items-center rounded-full overflow-hidden'>
            <img src={imgURL} alt={label} width={200} height={200} className="object-cover"/>
        </div>
    </div>
  )
}

export default PicGaleria;
