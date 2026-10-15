import { ProductTabs } from "./ProductTabs/ProductTabs";
import './RelatedProducts.scss';

export function RelatedProducts() {

    

    return (

        <section className="related-products">
            <h2 className="related-products__title">Produtos relacionados</h2>
            <ProductTabs/>
        </section>

    );
}
