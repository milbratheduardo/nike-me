import React, { useState, useEffect, useRef } from 'react';
import { logoZsul } from '../assets/images';
import { hamburger, arrowRight } from '../assets/icons';
import { navLinks } from '../constants';
import Button from '../components/Button';  

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setDropdownOpen(null);
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
            <ul className='flex-1 flex justify-center items-center gap-14 max-lg:hidden'>
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
            <div className='hidden max-lg:block'>
                <img 
                  src={hamburger}  
                  alt='Hamburguer'
                  width={25}
                  height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav;
