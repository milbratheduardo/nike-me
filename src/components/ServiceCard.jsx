import React from 'react';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col items-center'>
      <div className='w-36 h-36 flex justify-center items-center rounded-full overflow-hidden'>
        <img src={imgURL} alt={label} width={180} height={180} className="object-cover" />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold text-center'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center'>{subtext}</p>
    </div>
  );
};

export default ServiceCard;
