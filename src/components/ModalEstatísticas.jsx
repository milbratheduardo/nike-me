import React, { useEffect, useState } from 'react';
import { FaCircleCheck, FaHandshakeSimple } from 'react-icons/fa6';
import { IoMdCloseCircle } from 'react-icons/io';

const ModalEstatisticas = ({ id, onClose, isVisible }) => {
  const [userAtletas, setUserAtletas] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [earningData, setEarningData] = useState([]);
  const [inscricoes, setInscricoes] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      console.log('ID: ', id)
      try {
        const response = await fetch(`https://api.zsulesportes.com/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          console.error('Erro ao buscar dados do usuário');
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    };

    if (id) {
      fetchUserInfo();
    }
  }, [id]);

  useEffect(() => {
    const fetchCampeonatosInscritos = async () => {
      try {
        const response = await fetch(`https://api.zsulesportes.com/inscricoes/`);
        const data = await response.json();
        const inscricoesFiltradas = data.data.filter(inscricao => inscricao.userId === id);
        setInscricoes(inscricoesFiltradas);
        console.log('Inscrições do Usuário: ', inscricoesFiltradas);
      } catch (error) {
        console.error("Erro ao buscar campeonatos:", error);
      }
    };

    fetchCampeonatosInscritos();
  }, [id]);

  useEffect(() => {
    const fetchUserAtletas = async () => {
      try {
        const responseAtletas = await fetch(`https://api.zsulesportes.com/elenco/team/${id}`);
        if (responseAtletas.ok) {
          const dataAtletas = await responseAtletas.json();
          setUserAtletas(dataAtletas.data[0]);
        } else {
          console.error('Erro ao buscar atletas do usuário');
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    };

    if (id) {
      fetchUserAtletas();
    }
  }, [id]);

  useEffect(() => {
    if (inscricoes.length > 0) {
      const totalVitorias = inscricoes.reduce((acc, inscricao) => acc + (inscricao.vitorias || 0), 0);
      const totalEmpates = inscricoes.reduce((acc, inscricao) => acc + (inscricao.empates || 0), 0);
      const totalDerrotas = inscricoes.reduce((acc, inscricao) => acc + (inscricao.derrotas || 0), 0);

      setEarningData([
        {
          icon: <FaCircleCheck />,
          amount: totalVitorias,
          subtitle: 'Vitórias',
          title: 'Vitórias',
          iconColor: '#52bf90',
          iconBg: '#d9ead3',
          pcColor: 'red-600',
        },
        {
          icon: <FaHandshakeSimple />,
          amount: totalEmpates,
          subtitle: 'Empates',
          title: 'Empates',
          iconColor: 'rgb(255, 244, 229)',
          iconBg: 'rgb(254, 201, 15)',
          pcColor: 'green-600',
        },
        {
          icon: <IoMdCloseCircle />,
          amount: totalDerrotas,
          subtitle: 'Derrotas',
          title: 'Derrotas',
          iconColor: 'rgb(228, 106, 118)',
          iconBg: 'rgb(255, 244, 229)',
          pcColor: 'green-600',
        },
      ]);
    }
  }, [inscricoes]);

  if (!isVisible) return null;

  const handleClose = e => {
    if (e.target.id === 'wrapper') onClose();
  };

  console.log('User: ', userInfo);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
      <div className='w-full sm:w-[800px] md:w-[900px] lg:w-[1000px] flex flex-col items-center' style={{ maxHeight: '600px' }}>
        <button className='text-white text-xl place-self-end' onClick={onClose}>
          X
        </button>
        <div className='bg-white p-4 rounded w-full' style={{ maxHeight: '100%', overflowY: 'auto' }}>
          <h2 className="text-2xl font-bold text-center pt-12 sm:pt-0">Estatísticas da Equipe</h2>
          <h3 className="text-xl font-bold text-center mb-4">{userInfo.data?.teamName}</h3>
          <div className="flex flex-col sm:flex-row justify-between items-start mt-4 w-full">
            <div className="flex flex-col items-center">
              {userInfo.data?.pictureBase64 && (
                <div className='mb-4 sm:mb-0'>
                  <img src={userInfo.data.pictureBase64} alt="Team Logo" className='h-24 w-24 object-cover rounded-full' />
                </div>
              )}
              <div className='sm:hidden text-center mt-4'>
                <p className='font-bold text-gray-400'>Número de Atletas</p>
                <p className='text-2xl'>{userAtletas?.length ? userAtletas?.length : '0'}</p>
              </div>
            </div>
            <div className='flex-grow flex flex-col sm:flex-wrap sm:gap-4 justify-center pt-5 sm:pt-0'>
              <div className='flex flex-col sm:flex-row justify-center gap-4 items-center'>
                {earningData.map((item) => (
                  <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-40 p-4 pt-9 rounded-2xl flex flex-col items-center'>
                    <button
                      type='button'
                      style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                      className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                    >
                      {item.icon}
                    </button>
                    <p className='mt-3'>
                      <span className='text-lg font-semibold'>{item.amount}</span>
                    </p>
                    <p className='text-sm text-gray-400 mt-1'>{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='hidden sm:block mr-4 text-center'>
              <p className='font-bold text-gray-400'>Número de Atletas</p>
              <p className='text-2xl'>{userAtletas?.length ? userAtletas?.length : '0'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEstatisticas;
