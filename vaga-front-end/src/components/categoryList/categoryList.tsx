import { useState } from 'react';
import './categoryList.scss';

const CATEGORIES_DATA = [
    { id: 'tecnologia', name: 'Tecnologia', icon: '/tecnologia.svg' },
    { id: 'supermercado', name: 'Supermercado', icon: '/supermercado.svg' },
    { id: 'bebidas', name: 'Bebidas', icon: '/bebidas.svg' },
    { id: 'ferramentas', name: 'Ferramentas', icon: '/ferramentas.svg' },
    { id: 'saude', name: 'Saúde', icon: '/saude.svg' },
    { id: 'esportes', name: 'Esportes e Fitness', icon: '/esportes.svg' },
    { id: 'moda', name: 'Moda', icon: '/moda.svg' },
];

export function CategoryList() {
    const [activeCategory, setActiveCategory] = useState('tecnologia');

    return (
        <nav className="categories" aria-label="Categorias">
            <ul className="categories__list">
                {CATEGORIES_DATA.map((category) => {
                    const isActive = activeCategory === category.id;

                    return (
                        <li key={category.id} className="categories__item">
                            <button
                                className={`categories__button ${isActive ? 'categories__button--active' : ''}`}
                                type="button"
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <div className="categories__box-icon">
                                    <img src={category.icon} className="categories__icons" alt="" aria-hidden="true" />
                                </div>
                            </button>
                            <span className="categories__name">{category.name}</span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}