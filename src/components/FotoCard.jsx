import React from 'react';

const FotoCard = ({ imgURL, label, subtext, link }) => {
  const formattedSubtext = subtext.startsWith('http://') || subtext.startsWith('https://') 
    ? subtext 
    : `https://${subtext}`;
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col items-center'>
      <div className='w-[200px] h-[200px] flex justify-center items-center rounded-full overflow-hidden'>
        <img src={imgURL} alt={label} width={200} height={200} className="object-cover"/>
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold text-center'>{label}</h3>
      <a 
        href={`${formattedSubtext}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-3 text-blue-600 hover:underline break-words max-w-full text-center"
      >
        {subtext}
      </a>
    </div>
  )
}

export default FotoCard;
