import './FooterMain.scss';
export function FooterMain() {
    return (
        <section className="footer-main">
            <div className="footer-main__wrapper">
                <div className="footer-main__brand-side">
                    <div className="footer-main__logo">
                        <img src="/logo.svg" alt="Econverse" />
                    </div>

                    <p className="footer-main__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className="footer-main__socials">
                        <a href="#instagram" className="footer-main__social-icon" aria-label="Instagram">
                           <img src="/instagram.svg" alt="instagram" />
                        </a>
                        <a href="#facebook" className="footer-main__social-icon" aria-label="Facebook">
                             <img src="/facebook.svg" alt="facebook" />
                        </a>
                        <a href="#linkedin" className="footer-main__social-icon" aria-label="LinkedIn">
                             <img src="/linkedin.svg" alt="linkedin" />
                        </a>
                    </div>
                </div>

                <div className="footer-main__vertical-divider"></div>

                <div className="footer-main__links-side">
                    <div className="footer-main__links-column">
                        <h3 className="footer-main__links-title">Institucional</h3>
                        <ul className="footer-main__links-list">
                            <li className="footer-main__links-item">
                                <a href="#sobre" className="footer-main__link">Sobre Nós</a>
                            </li>
                            <li className="footer-main__links-item">
                                <a href="#movimento" className="footer-main__link">Movimento</a>
                            </li>
                            <li className="footer-main__links-item">
                                <a href="#trabalhe" className="footer-main__link">Trabalhe conosco</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-main__links-column">
                        <h3 className="footer-main__links-title">Ajuda</h3>
                        <ul className="footer-main__links-list">
                            <li className="footer-main__links-item">
                                <a href="#suporte" className="footer-main__link">Suporte</a>
                            </li>
                            <li className="footer-main__links-item">
                                <a href="#fale-conosco" className="footer-main__link">Fale Conosco</a>
                            </li>
                            <li className="footer-main__links-item">
                                <a href="#faq" className="footer-main__link">Perguntas Frequentes</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-main__links-column">
                        <h3 className="footer-main__links-title">Termos</h3>
                        <ul className="footer-main__links-list">
                            <li className="footer-main__links-item">
                                <a href="#termos" className="footer-main__link">Termos e Condições</a>
                            </li>
                            <li className="footer-main__links-item">
                                <a href="#privacidade" className="footer-main__link">Política de Privacidade</a>
                            </li>
                            <li className="footer-main__links-item">
                                <a href="#troca" className="footer-main__link">Troca e Devolução</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}