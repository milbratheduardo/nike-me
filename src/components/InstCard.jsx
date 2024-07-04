import React from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const InstCard = ({ imgURL, label, subtext, link }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col items-center'>
        <div className='w-[120px] h-[120px] flex justify-center items-center rounded-full overflow-hidden'>
            <img src={imgURL} alt={label} width={120} height={120} className="object-cover"/>
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold text-center'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center'>{subtext}</p>
    </div>
  )
}

export default InstCard;
