import type { Product } from "../../../models/Products";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        src={product.photo}
        alt={product.productName}
        className="product-card__image"
      />
      <h3 className="product-card__name">
        {product.productName}
      </h3>
      {/* <p className="product-card__description">
        {product.descriptionShort}
      </p> */}
      <p className="product-card__price-promotion">R$ 30,90</p>
      <p className="product-card__price">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p className="product-card__price-installment">ou 2x de R$ 49,95 sem juros</p>
      <p className="product-card__freight">Frete grátis</p>
      <button className="product-card__button">
        COMPRAR
      </button>
    </article>
  );
}
