import { Link, useLocation, useNavigate } from 'react-router-dom';

const quickLinks = [
    { label: 'Home', href: 'home', type: 'scroll' },
    { label: 'Products', href: 'products', type: 'scroll' },
    { label: 'Why Us', href: 'why', type: 'scroll' },
    { label: 'About Us', href: 'about', type: 'scroll' },
    { label: 'Contact', href: 'contact', type: 'scroll' },
];

const productLinks = [
    { label: 'Chilli Powder', href: 'products', type: 'scroll' },
    { label: 'Chicken 65 Masala', href: 'products', type: 'scroll' },
    { label: 'Fish Fry Masala', href: 'products', type: 'scroll' },
];

export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e, item) => {
        if (item.type === 'link') return; // Standard Link behavior

        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const target = document.getElementById(item.href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const target = document.getElementById(item.href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src="/LOGO SHREE VV.png" alt="Shree VV Logo" className="footer-logo-img" />
                                <div className="footer-brand-name">Shree <span>VV</span> Masala</div>
                            </div>
                            <p className="footer-tagline">The Secret of Tradition</p>
                            <p className="footer-desc">Handcrafted premium masala powders from Kanishka Home Foods, Salem. Bringing authentic flavours to your kitchen for generations.</p>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/profile.php?id=100083466225974" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-fb"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/shree_vvmasala/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-ig"><i className="fab fa-instagram"></i></a>
                            </div>
                            <a href="https://wa.me/919042081692?text=Hi%2C%20I'm%20interested%20in%20Shree%20VV%20Masala%20products.%20Could%20you%20please%20share%20the%20product%20catalogue%2C%20price%20list%2C%20and%20ordering%20details%3F" target="_blank" rel="noreferrer" className="footer-wa">
                                <i className="fab fa-whatsapp"></i> WhatsApp Us
                            </a>
                        </div>

                        <div className="footer-links-col">
                            <h4>Quick Links</h4>
                            <ul>
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        {link.type === 'link' ? (
                                            <Link to={link.href}>{link.label}</Link>
                                        ) : (
                                            <a href={`#${link.href}`} onClick={(e) => handleNavClick(e, link)}>{link.label}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links-col">
                            <h4>Our Products</h4>
                            <ul>
                                {productLinks.map(p => (
                                    <li key={p.label}>
                                        <a href={`#${p.href}`} onClick={(e) => handleNavClick(e, p)}>{p.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-contact-col">
                            <h4>Contact Info</h4>
                            <div className="footer-contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>#456, Moola Pillaiyar Koil Street, Kandampatty, Salem-636 005</span>
                            </div>
                            <div className="footer-contact-item">
                                <i className="fas fa-phone"></i>
                                <a href="tel:+919042081692">+91 90420 81692</a>
                            </div>
                            <div className="footer-contact-item">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:kanishkahomefoods@gmail.com">kanishkahomefoods@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>© 2025 <strong>Shree VV Masala</strong> | Kanishka Home Foods, Salem. All rights reserved.</p>
                    <p className="footer-made">
                        Designed & Developed by <a href="https://strobilantech.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-light)', fontWeight: '600' }}>Strobilan Technologies</a> <i className="fas fa-heart"></i>
                    </p>
                </div>
            </div>
        </footer>
    );
}
