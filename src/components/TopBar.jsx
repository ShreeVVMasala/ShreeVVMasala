export default function TopBar() {
    return (
        <div className="top-bar">
            <div className="top-bar-inner">
                <div className="top-bar-left">
                    <a href="https://www.instagram.com/shree_vvmasala/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-ig"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100083466225974" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-fb"><i className="fab fa-facebook-f"></i></a>
                </div>
                <div className="top-bar-center">
                    FREE SHIPPING + FLAT 15% OFF ON ORDERS ₹999+
                </div>
                <div className="top-bar-right">
                    HELPLINE: <strong>+91 90420 81692</strong>
                </div>
            </div>
        </div>
    );
}
