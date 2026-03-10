export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            {/* Background Ornaments */}
            <div className="contact-bg-ornament" aria-hidden="true">Contact</div>

            <div className="container">
                <div className="section-header" data-aos>
                    <p className="section-eyebrow center">Get In Touch</p>
                    <h2 className="section-title">Contact <span className="maroon-text">Us</span></h2>
                    <p className="section-sub">
                        Have a question or looking for a bulk order? Our team is always here to assist you with the
                        finest spice blends and expert advice.
                    </p>
                </div>
                <div className="contact-grid">
                    <div className="contact-card" data-aos style={{ transitionDelay: '0s' }}>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Our Location</h3>
                        <p>
                            #456, Moola Pillaiyar Koil Street,<br />
                            Kandampatty, Salem – 636 005,<br />
                            Tamil Nadu, India
                        </p>
                    </div>

                    <div className="contact-card" data-aos style={{ transitionDelay: '0.1s' }}>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>Call / WhatsApp</h3>
                        <p>
                            <a href="tel:+919042081692">+91 90420 81692</a><br />
                            Available for expert consultation
                        </p>
                        <a
                            href="https://wa.me/919042081692?text=Hi%2C%20I'm%20interested%20in%20Shree%20VV%20Masala%20products.%20Could%20you%20please%20share%20the%20product%20catalogue%2C%20price%20list%2C%20and%20ordering%20details%3F"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-wa-btn"
                        >
                            <i className="fab fa-whatsapp"></i> Chat with Us
                        </a>
                    </div>

                    <div className="contact-card" data-aos style={{ transitionDelay: '0.2s' }}>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h3>Email Our Team</h3>
                        <p>
                            <a href="mailto:kanishkahomefoods@gmail.com" className="email-link">
                                kanishkahomefoods<br />@gmail.com
                            </a><br />
                            Expect a personal response within 24 hours.
                        </p>
                    </div>

                    <div className="contact-card" data-aos style={{ transitionDelay: '0.3s' }}>
                        <div className="contact-icon-wrap">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h3>Work Hours</h3>
                        <p>
                            Monday – Saturday<br />
                            9:00 AM – 7:00 PM<br />
                            <span className="maroon-text" style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Sunday: Closed</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
