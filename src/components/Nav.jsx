import { logoZsul } from '../assets/images';
import { hamburger, arrowRight } from '../assets/icons';
import { navLinks } from '../constants';
import Button from '../components/Button';  


const Nav = () => {
  return (
    <header className='padding-x py-2 absolute z-10 w-full'>
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
                <li key={item.label}>
                    {item.external ? (
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

export default Nav