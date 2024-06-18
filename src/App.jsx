import { CustomerReviews, Footer, Hero, PopularProducts, Services,
SpecialOffer, SuperQuality, Subscribe, Parceiros,
Noticias,
Fotos} from './sections';

import Nav from './components/Nav';

const App = () => (
  <main className="relative">
        <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
    </section>
    <section className="padding">
        <SuperQuality />
    </section>
    <section className="padding-x py-10">
        <Services />
    </section>
    <section className="bg-foto padding">
        <CustomerReviews />
    </section>
    <section className="padding-x py-10">
        <Noticias />
    </section>
    <section className="padding-x py-10">
        <Parceiros />
    </section>
    <section className="padding-x py-10">
        <Fotos />
    </section>
    <section className="bg-white-400 padding-x padding-t pb-8">
        <Footer />
    </section>
  </main>
);

export default App;