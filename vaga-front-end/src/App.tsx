import { Header } from './components/header/Header';
import { Banner } from './components/banner/banner';

import { CategoryList } from './components/categoryList/categoryList';
import { RelatedProducts } from './components/relatedProducts/RelatedProducts';
import { PartnerContainer } from './components/PartnersContainer/PartnerContainer';


function App() {
  return (
    <main>
      <Header />
      <Banner />
      <CategoryList />
      <RelatedProducts />
      <PartnerContainer />
    </main>
  );
}

export default App;
