import './Newsletter.scss';
export function Newsletter() {
    return (
        <section className="newsletter">
            <div className="newsletter__container">

                <div className="newsletter__text-group">
                    <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
                    <p className="newsletter__description">
                        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </div>

                <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                    <div className="newsletter__field-row">
                        <input
                            type="text"
                            className="newsletter__input newsletter__input--name"
                            placeholder="Digite seu nome"
                            required
                        />
                        <input
                            type="email"
                            className="newsletter__input newsletter__input--email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                        <button type="submit" className="newsletter__button">
                            INSCREVER
                        </button>
                    </div>

                    <label className="newsletter__consent-label">
                        <input
                            type="checkbox"
                            className="newsletter__checkbox"
                            required
                        />
                        <span className="newsletter__consent-text">Aceito os termos e condições</span>
                    </label>
                </form>

            </div>
        </section>
    );
}