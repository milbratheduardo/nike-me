import { services } from '../constants'
import ParceiroCard from '../components/ParceiroCard'

const Parceiros = () => {
  return (
    <section className="max-container flex flex-col items-center border-t border-gold gap-9">
      <h3 className="font-palanquin text-center text-4xl font-bold mt-10">
        Patrocinadores 
        <span className="text-gold"> 2024 </span>
      </h3>
      <div className="flex justify-center flex-wrap gap-9 mt-6">
        {services.map((service) => (
          <ParceiroCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Parceiros

