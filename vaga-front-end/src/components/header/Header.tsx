
import { useState } from 'react';
import './Header.scss';

const categories = [
  { label: 'TODAS CATEGORIAS', href: '#categorias' },
  { label: 'SUPERMERCADO', href: '#supermercado' },
  { label: 'LIVROS', href: '#livros' },
  { label: 'MODA', href: '#moda' },
  { label: 'LANÇAMENTOS', href: '#lancamentos' },
  { label: 'OFERTAS DO DIA', href: '#ofertas' },
  { label: 'ASSINATURA', href: '#assinatura', icon: '/coroa.svg' },
];

export function Header() {
  const [activeHref, setActiveHref] = useState('');

  return (
    <header className="header">
      <div className="header__infos">
        <p className="header__info-item">
          <img src="/escudo.svg" alt="" />
          <span>
            Compra <strong className="header__info-highlight">100% segura</strong>
          </span>
        </p>

        <p className="header__info-item">
          <img src="/carro.svg" alt="" />
          <span>
            <strong className="header__info-highlight">Frete grátis</strong> acima de R$ 200
          </span>
        </p>

        <p className="header__info-item">
          <img src="/cartao.svg" alt="" />
          <span>
            <strong className="header__info-highlight">Parcele</strong> suas compras
          </span>
        </p>
      </div>

      <div className="header__container">
        <a
          className="header__logo-link"
          href="/"
          aria-label="Econverse - Página inicial"
        >
          <img
            src="/logo.svg"
            className="header__logo-img"
            alt="Logo Econverse"
          />
        </a>

        <div className="header__search">
          <input
            type="search"
            className="header__search-input"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />

          <img
            src="/lupa.svg"
            className="header__search-icon"
            alt=""
            aria-hidden="true"
          />
        </div>

        <nav className="header__menus" aria-label="Área do usuário">
          <a href="/pedidos" className="header__menu-link" aria-label="Meus pedidos">
            <img src="/caixa.svg" className="header__menu-img" alt="" />
          </a>

          <a href="/favoritos" className="header__menu-link" aria-label="Favoritos">
            <img src="/coracao.svg" className="header__menu-img" alt="" />
          </a>

          <a href="/perfil" className="header__menu-link" aria-label="Minha conta">
            <img src="/perfil.svg" className="header__menu-img" alt="" />
          </a>

          <a href="/carrinho" className="header__menu-link" aria-label="Meu carrinho">
            <img src="/carrinho.svg" className="header__menu-img" alt="" />
          </a>
        </nav>
      </div>

      <nav
        className="header__navigation"
        aria-label="Navegação principal"
      >
        {categories.map((category) => (
          <a
            key={category.href}
            className={`header__navigation-link ${activeHref === category.href
                ? 'header__navigation-link--active'
                : ''
              }`}
            href={category.href}
            onClick={() => setActiveHref(category.href)}
            aria-current={
              activeHref === category.href ? 'location' : undefined
            }
          >
            {category.icon && (
              <img className="header__navigation-img" src={category.icon} alt="" aria-hidden="true" />
            )}
            {category.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
