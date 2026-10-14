
import './Header.scss';

export function Header() {
  return (
    <header className="header">
        <div className='header__infos'>
            <p>Compra 100% segura</p>
            <p>Frete gratis acima de R$ 200</p>
            <p>Parcele suas compras</p>
        </div>
      <div className="header__container">
        <a
          className="header__logo"
          href="/"
          aria-label="Página inicial"
        >
          Econverse
        </a>

        <nav
          className="header__navigation"
          aria-label="Navegação principal">

        <a href="#produtos">TODAS CATEGORIAS</a>
        <a href="#produtos">SUPERMERCADO</a>
        <a href="#produtos">LIVROS</a>
        <a href="#produtos">MODA</a>
        <a href="#produtos">LANÇAMENTO</a>
        <a href="#produtos">OFERTAS DO DIA</a>
        <a href="#produtos">ASSINATURA</a>
        </nav>
      </div>
    </header>
  );
}
