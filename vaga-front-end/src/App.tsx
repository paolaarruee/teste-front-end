
import { useEffect, useState } from 'react';
import { getProducts } from './services/productService';
import type { Product } from './models/Products';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/banner';

import { CategoryList } from './components/categoryList/categoryList';
import { RelatedProducts } from './components/relatedProducts/RelatedProducts';


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError('Não foi possível carregar os produtos.');
      } finally {
        setLoading(false);
      }
    }

    void loadProducts();
  }, []);

  function handleSelect(product: Product) {
    console.log('Produto selecionado:', product);
  }

  return (
    <main>
      <Header/>
      <Banner/>
      <CategoryList/>
      <RelatedProducts/>
      {/* <h1>Vitrine de produtos</h1> */}

      {/* {loading && <p>Carregando produtos...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <ProductGrid
          products={products}
          onSelect={handleSelect}
        />
      )} */}
    </main>
  );
}

export default App;
