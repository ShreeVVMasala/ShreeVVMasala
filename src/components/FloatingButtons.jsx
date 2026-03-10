import { useState, useEffect } from 'react';

export default function FloatingButtons() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <a
                href="https://wa.me/919042081692?text=Hi%2C%20I'm%20interested%20in%20Shree%20VV%20Masala%20products.%20Could%20you%20please%20share%20the%20product%20catalogue%2C%20price%20list%2C%20and%20ordering%20details%3F"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-float"
                aria-label="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
                <span className="wa-tooltip">Chat for Orders!</span>
            </a>

            <button
                className={`back-to-top ${showTop ? 'visible' : ''}`}
                id="backToTop"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <i className="fas fa-chevron-up"></i>
            </button>
        </>
    );
}
