import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { href: 'home', label: 'Home', type: 'scroll' },
    { href: 'products', label: 'Products', type: 'scroll' },
    { href: 'why', label: 'Why Us', type: 'scroll' },
    { href: 'about', label: 'About', type: 'scroll' },
    { href: 'contact', label: 'Contact', type: 'scroll' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/products') {
            setActive('/products');
        } else if (location.pathname === '/') {
            const onScroll = () => {
                const sections = ['home', 'why', 'about', 'contact'];
                let current = 'home';
                for (const id of sections) {
                    const el = document.getElementById(id);
                    if (el && window.scrollY >= el.offsetTop - 120) current = id;
                }
                setActive(current);
            };
            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);
        }
    }, [location]);

    const handleNavClick = (e, item) => {
        setMenuOpen(false);

        if (item.type === 'link') {
            setActive(item.href);
            return; // Standard Link handle
        }

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
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={() => setActive('home')}>
                    <img src="/LOGO SHREE VV.png" alt="Shree VV Masala Logo" className="nav-logo-img" />
                    <div className="logo-text-wrap">
                        <span className="logo-shree">SHREE <span className="logo-vv">VV</span></span>
                        <span className="logo-masala">Masala</span>
                    </div>
                </Link>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.href}>
                            {item.type === 'link' ? (
                                <Link
                                    to={item.href}
                                    className={`nav-link ${active === item.href ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    href={`#${item.href}`}
                                    className={`nav-link ${active === item.href ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                >
                                    {item.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <a
                        href="https://wa.me/919042081692?text=Hi%2C%20I'm%20interested%20in%20Shree%20VV%20Masala%20products.%20Could%20you%20please%20share%20the%20product%20catalogue%2C%20price%20list%2C%20and%20ordering%20details%3F"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-cta"
                    >
                        <i className="fab fa-whatsapp"></i> <span className="cta-text">Order Now</span>
                    </a>
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        aria-label="menu"
                        onClick={() => setMenuOpen(o => !o)}
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
