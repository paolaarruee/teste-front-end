import './partners.scss';

export function Partners() {
    return (
        <section className="partners">
            <img
                src="/parceiros.png"
                alt=""
                className="partners__image"
                aria-hidden="true"
            />

            <div className="partners__content">
                <h2 className="partners__title">
                    Parceiros
                </h2>

                <p className="partners__subtitle">
                    Lorem ipsum dolor sit amet, consectetur
                </p>

                <button
                    type="button"
                    className="partners__button"
                >
                    CONFIRA
                </button>
            </div>
        </section>
        
    );
}