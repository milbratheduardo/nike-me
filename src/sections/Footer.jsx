import { copyrightSign } from "../assets/icons"
import { logoZsul } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container border-t border-gold">
      <div className="flex justify-center items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={logoZsul}
            width={150}
            height={46} />
          </a>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-gold rounded-full">
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-gold font-montserrat mt-10 text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-black font-montserrat text-base leading-normal" key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>            
      </div>
        </div>
        
      <div className="flex justify-center text-gold mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer">
              <img 
                src={copyrightSign}
                alt="copyright sign"
                width={20}
                height={20}
                className="rounded-full m-0"
              />
              <p>Desenvolvido por Eduardo Milbrath :)</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer