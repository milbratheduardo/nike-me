import { services } from '../constants'
import { arrowRight } from '../assets/icons';
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'

const Services = () => {
  return (
    <section className="max-container flex flex-col items-center gap-9">
      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-9">
        <Button label="Ver Campeonatos" iconURL={arrowRight} />
      </div>
    </section>
  )
}

export default Services
