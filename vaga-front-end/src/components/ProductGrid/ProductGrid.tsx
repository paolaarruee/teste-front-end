

import type { Product } from '../../models/Products';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductGrid.scss';

interface ProductGridProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

export function ProductGrid({
  products,
  onSelect,
}: ProductGridProps) {
  return (
    <section className="product-grid" aria-label="Vitrine de produtos">
      {products.map((product, index) => (
        <ProductCard
          key={`${product.productName}-${index}`}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}
