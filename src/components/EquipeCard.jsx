import { React, useState} from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import ModalEstatisticas from './ModalEstatísticas';

const EquipeCard = ({ imgURL, label, subtext, href, id }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col items-center'>
      <div className='w-32 h-32 flex justify-center items-center rounded-full overflow-hidden'>
        <img src={imgURL} alt={label} className='w-full h-full object-cover' />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold text-center'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center'>{subtext}</p>

      <div className="w-full flex justify-center mt-9">
        <Button href= {href} label="Siga no Instagram!" iconURL={arrowRight} />
      </div>
      <div className="w-full flex justify-center mt-9">
        <Button onClick={openModal} label="Estatísticas" iconURL={arrowRight} />
      </div>

      {isModalVisible && (
        <ModalEstatisticas
          isVisible={isModalVisible}
          onClose={closeModal}
          id={id}
        />
      )}
    </div>
  );
};

export default EquipeCard;
