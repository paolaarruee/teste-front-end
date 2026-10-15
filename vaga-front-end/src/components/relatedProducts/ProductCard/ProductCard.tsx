

import type { Product } from '../../../models/Products';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({
  product,
  onSelect,
}: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <article className="product-card">
      <h2 className="product-card__title">
        {product.productName}
      </h2>
    </article>
  );
}
