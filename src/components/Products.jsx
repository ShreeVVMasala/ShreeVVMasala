const products = [
    {
        img: '/chilli.png',
        badge: 'Top Seller', badgeClass: '',
        name: 'Chilli Powder',
        desc: 'Pure, sun-dried red chillies ground for perfect spice & vibrant color.',
        wa: "Hi%2C%20I'm%20interested%20in%20Shree%20VV%20Masala%20products.%20Could%20you%20please%20share%20the%20product%20catalogue%2C%20price%20list%2C%20and%20ordering%20details%3F",
    },
    {
        img: '/chicken 65.png',
        badge: 'Bestseller', badgeClass: 'popular',
        name: 'Chicken 65 Masala',
        desc: 'Traditional secret blend for the perfect, crispy & spicy Chicken 65.',
        wa: "Hi%2C%20I'm%20interested%20in%20Shree%20VV%20Masala%20products.%20Could%20you%20please%20share%20the%20product%20catalogue%2C%20price%20list%2C%20and%20ordering%20details%3F",
    },
    {
        img: '/fish fry.png',
        badge: 'Recommended', badgeClass: 'new-badge',
        name: 'Fish Fry Masala',
        desc: 'The ultimate aromatic coating for a delicious golden fish fry.',
        wa: "Hi%2C%20I'm%20interested%20in%20Shree%20VV%20Masala%20products.%20Could%20you%20please%20share%20the%20product%20catalogue%2C%20price%20list%2C%20and%20ordering%20details%3F",
    },
];

function ProductCard({ p }) {
    return (
        <div className="product-card" data-aos>
            <div className="product-img-wrap">
                {p.badge && (
                    <div className="product-badge-wrap">
                        <span className={`product-badge ${p.badgeClass || ''}`}>{p.badge}</span>
                    </div>
                )}
                <img src={p.img} alt={p.name} className="product-img" loading="lazy" />
            </div>
            <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a
                    href={`https://wa.me/919042081692?text=${p.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="product-btn"
                >
                    <i className="fab fa-whatsapp"></i> Enquire Now
                </a>
            </div>
        </div>
    );
}

export default function Products({ limit }) {
    const displayProducts = limit ? products.slice(0, limit) : products;

    return (
        <section className="products-section" id="products">
            <div className="container">
                <div className="section-header" data-aos>
                    <p className="section-eyebrow center">Quality Masalas</p>
                    <h2 className="section-title">Our <span className="maroon-text">Products</span></h2>
                </div>
                <div className="products-grid">
                    {displayProducts.map(p => (
                        <ProductCard key={p.name} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
