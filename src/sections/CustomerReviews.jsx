import Button from '../components/Button'
import { arrowRight } from '../assets/icons';
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Nos Acompanhe no 
          <span className="text-gold"> Instagram </span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lá você irá poder acompanhar todas as novidades da 
          <span className="text-gold"> ZSUL Esportes </span>
      </p>
      <div className="w-full flex justify-center mt-9">
        <Button href="https://www.instagram.com/zsul_esportes/" label="Segue Lá!" iconURL={arrowRight} />
      </div>

    </section>
  )
}

export default CustomerReviews