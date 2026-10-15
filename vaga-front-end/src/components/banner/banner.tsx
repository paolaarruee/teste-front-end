
import './banner.scss';

export function Banner() {
    return (
        <section className="banner" aria-label="Promoções">
            <img
                src="/banner.png"
                className="banner__img"
                alt=""
                aria-hidden="true"
            />

            <div className="banner__infos">
                <h1 className="banner__title">
                    Venha conhecer nossas promoções
                </h1>


                <span className="banner__subtitle">
                    <span className="banner__highlight">50% Off</span> nos produtos
                </span>
            </div>
              <button className="banner__button" type="button">
                    Ver produto
                </button>
        </section>
    );
}
