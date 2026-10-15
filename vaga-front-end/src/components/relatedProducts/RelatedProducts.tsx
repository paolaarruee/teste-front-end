import { useEffect, useState } from "react";
import type { Product } from "../../models/Products";
import { getProducts } from "../../services/productService";

import { ProductTabs } from "./ProductTabs/ProductTabs";
import { ProductCard } from "./ProductCard/ProductCard";
import "./RelatedProducts.scss";

export function RelatedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const visibleCards = 4;
    const maxIndex = Math.max(0, products.length - visibleCards);

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error(error);
                setError("Erro ao carregar produtos.");
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    function handleNext() {
        setCurrentIndex((index) =>
            Math.min(index + 1, maxIndex)
        );
    }

    function handlePrevious() {
        setCurrentIndex((index) =>
            Math.max(index - 1, 0)
        );
    }

    return (
        <section className="related-products">
            <h2 className="related-products__title">
                Produtos relacionados
            </h2>

            <ProductTabs />

            {loading && <p>Carregando produtos...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
                <div className="related-products__carousel">
                    <button
                        className="related-products__arrow related-products__arrow--prev"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        aria-label="Produtos anteriores"
                    >
                        &#10094;
                    </button>

                    <div className="related-products__viewport">
                        <div
                            className="related-products__track"
                            style={{
                                transform: `translateX(-${currentIndex * 25
                                    }%)`,
                            }}
                        >
                            {products.map((product) => (
                                <div
                                    className="related-products__item"
                                    key={product.productName}
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="related-products__arrow related-products__arrow--next"
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        aria-label="Próximos produtos"
                    >
                        &#10095;
                    </button>
                </div>
            )}
        </section>
    );
}
