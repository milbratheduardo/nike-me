import React from 'react';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-24 h-24 flex justify-center items-center rounded-full overflow-hidden'>
        <img src={imgURL} alt={label} className='w-full h-full object-cover' />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  );
};

export default ServiceCard;
