import { services } from '../constants'
import { arrowRight } from '../assets/icons';
import ParceiroCard from '../components/ParceiroCard'
import Button from '../components/Button'

const Parceiros = () => {
  return (
    <section className="max-container flex flex-col items-center gap-9">
      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ParceiroCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Parceiros
