import {
  CustomerReviews,
  Hero,
  Nav,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./components";
const App = () => (
  <main className="relative">
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b"><Hero/></section>
    <section className="padding"><Popu/larProducts</section>
    <section className="padding"><Supe/rQuality</section>
    <section className="padding-x py-10"><Serv/ices</section>
    <section className="padding"><Spec/ialOffer</section>
    <section className="padding bg-pale-blue"><Cust/omerReviews</section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subs/cribe</section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Foot/er
    </section>
  </main>
);
export default App;
