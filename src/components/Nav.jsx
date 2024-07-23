import React, { useState, useEffect, useRef } from 'react';
import { logoZsul } from '../assets/images';
import { hamburger, arrowRight } from '../assets/icons';
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, neca_esporte, Unimed_litoralsul } from "../assets/images";
import Button from '../components/Button';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [tabelaLink, setTabelaLink] = useState('');
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const fetchTabelaLink = async () => {
      try {
        const response = await fetch('https://api.zsulesportes.com/link/tabela');
        const data = await response.json();
        setTabelaLink(data.data.link);
      } catch (error) {
        console.error("Error fetching tabela link:", error);
      }
    };

    fetchTabelaLink();
  }, []);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setDropdownOpen(null);
      setIsHamburgerOpen(false);
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (label) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  const handleHamburgerToggle = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const handleSubmenuToggle = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const navLinks = [
    { href: "/#home", label: "Home" },
    { 
        href: "#", 
        label: "Campeonatos",
        subLinks: [
            { href: "/#campeonatos", label: "Campeonatos Em Andamento" },
            { href: "#", label: "Campeonatos Finalizados" },
            { href: tabelaLink, label: "Tabela de Jogos", external: true},
            { href: "https://drive.google.com/file/d/1jvig2flLKjUerhfvjF6cG_djcTFNYXx9/view?usp=sharing", label: "Regulamento", external: true },
        ]
    },
    {
        href:"/equipes",
        label:"Equipes",
    },
    { href: "/noticias", label: "Notícias" },
    { href: "/fotos", label: "Fotos" },
    { href: "https://dashboard.zsulesportes.com/atletas_lp", label: "Atletas", external: true },
  ];

  return (
    <header className='padding-x py-2 absolute z-10 w-full' ref={navRef}>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={logoZsul}
            alt='Logo'
            width={180}
            height={60}
          />
        </a>
        <ul className='hidden lg:flex flex-1 justify-center items-center gap-14'>
          {navLinks.map((item) => (
            <li 
              key={item.label} 
              className='relative'
            >
              {item.subLinks ? (
                <>
                  <a 
                    href={item.href} 
                    onClick={() => handleDropdownToggle(item.label)}
                    className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gold cursor-pointer'
                  >
                    {item.label}
                  </a>
                  {dropdownOpen === item.label && (
                    <ul className='absolute top-full left-0 bg-white shadow-md rounded-md mt-2 dropdown-menu'>
                      {item.subLinks.map((subLink) => (
                        <li key={subLink.label}>
                          <a 
                            href={subLink.href} 
                            className='block px-4 py-2 text-slate-gray hover:text-gold cursor-pointer'
                            target={subLink.external ? "_blank" : "_self"}
                            rel={subLink.external ? "noopener noreferrer" : ""}
                          >
                            {subLink.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : item.external ? (
                <a 
                  href={item.href} 
                  className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gold cursor-pointer' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <a 
                  href={item.href} 
                  className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gold cursor-pointer'
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <Button href='https://dashboard.zsulesportes.com/' label="Painel" iconURL={arrowRight} />
          </li>
        </ul>
        <div className='lg:hidden'>
          <img 
            src={hamburger}  
            alt='Hamburguer'
            width={25}
            height={25}
            onClick={handleHamburgerToggle}
            className='cursor-pointer'
          />
        </div>
        {isHamburgerOpen && (
          <div className='absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 p-4 flex flex-wrap'>
            <div className='w-1/3'>
              {navLinks.slice(0, 3).map((item) => (
                <div key={item.label} className='py-2'>
                  <a 
                    href={item.href}
                    onClick={item.subLinks ? handleSubmenuToggle : null}
                    className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gold cursor-pointer block'
                  >
                    {item.label}
                  </a>
                  {item.subLinks && isSubmenuOpen && (
                    <div className='ml-4'>
                      {item.subLinks.map((subLink) => (
                        <div key={subLink.label} className='py-2'>
                          <a 
                            href={subLink.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gold cursor-pointer block'
                            target={subLink.external ? "_blank" : "_self"}
                            rel={subLink.external ? "noopener noreferrer" : ""}
                          >
                            {subLink.label}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='w-1/3'>
              {navLinks.slice(3, 6).map((item) => (
                <div key={item.label} className='py-2 ml-6'>
                  <a 
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gold cursor-pointer block'
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
            
            <div className='w-1/3 flex justify-center items-center'>
              <Button href='https://dashboard.zsulesportes.com/' label="Painel" iconURL={arrowRight} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
