import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ label, iconURL, href }) => {
    return (
        <Link to={href} className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-gold rounded-full text-white border-gold ${!iconURL && 'gap-0'}`}>
            {label}
            {iconURL && (
                <img 
                    src={iconURL}
                    alt="arrow right"
                    className="ml-2 rounded-full w-5 h-5" 
                />
            )}
        </Link>
    )
}

export default Button;
