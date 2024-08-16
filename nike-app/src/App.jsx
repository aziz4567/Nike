import {Hero,PopularProducts,Footer,CustomerReviews,Subscribe,SpecialOffer,SuperQuality,Services} from "./sections/index"
import Nav from "./Components/Nav"

function App() {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="bg-blue-100 padding">
        <CustomerReviews/> 
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
