import './BrandGrid.scss';

const brandsData = [
    { id: 1, name: 'Econverse', logo: '/logo.svg' },
    { id: 2, name: 'Econverse', logo: '/logo.svg' },
    { id: 3, name: 'Econverse', logo: '/logo.svg' },
    { id: 4, name: 'Econverse', logo: '/logo.svg' },
    { id: 5, name: 'Econverse', logo: '/logo.svg' },
];

export default function BrandGrid() {
    return (
        <section className="brand-section">
            <h2 className="brand-section__title">Navegue por marcas</h2>
            <div className="brand-section__grid">
                {brandsData.map((brand) => (
                    <div key={brand.id} className="brand-section__item">
                        <div className="brand-section__circle">
                            <img src={brand.logo} alt={brand.name} className="brand-section__logo" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}