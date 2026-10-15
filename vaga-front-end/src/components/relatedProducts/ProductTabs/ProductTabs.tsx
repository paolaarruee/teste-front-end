import { useState } from 'react';
import './productTabs.scss';

const MENU_DATA = [
    { id: 'celular', name: 'CELULAR' },
    { id: 'acessorios', name: 'ACESSÓRIOS' },
    { id: 'tablet', name: 'TABLET' },
    { id: 'notebook', name: 'NOTEBOOK' },
    { id: 'tvs', name: 'TVS' },
    { id: 'ver-todos', name: 'VER TODOS' },
];

export function ProductTabs() {
    const [activeTab, setActiveTab] = useState('celular');

    return (
        <nav className="product-tabs" aria-label="Menu de produtos">
            <ul className="product-tabs__list">
                {MENU_DATA.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <li key={tab.id} className="product-tabs__item">
                            <button
                                className={`product-tabs__button ${isActive ? 'product-tabs__button--active' : ''}`}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}