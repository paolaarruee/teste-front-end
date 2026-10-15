import { Header } from './components/header/Header';
import { Banner } from './components/banner/banner';

import { CategoryList } from './components/categoryList/categoryList';
import { RelatedProducts } from './components/relatedProducts/RelatedProducts';
import { PartnerContainer } from './components/PartnersContainer/PartnerContainer';
import { BrandGrid } from './components/brandGrid/BrandGrid';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <main>
      <Header />
      <Banner />
      <CategoryList />
      <RelatedProducts />
      <PartnerContainer />
      <BrandGrid />
      <Footer />
    </main>
  );
}

export default App;
