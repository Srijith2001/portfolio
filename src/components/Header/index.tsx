import { useEffect, useState } from 'react';
import profileImage from '../../assets/images/img_1.jpg';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['about', 'experience', 'skills', 'education', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <nav className="header__nav">
                <div className="header__logo">
                    <div className="header__image-wrapper">
                        <div className="header__image-container">
                            <img src={profileImage} alt="" className="header__image" />
                        </div>
                    </div>
                    <span className="header__logo-text">SB.</span>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className={`header__menu-btn ${menuOpen ? 'header__menu-btn--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                </button>

                {/* Overlay */}
                <div
                    className={`header__overlay ${menuOpen ? 'header__overlay--visible' : ''}`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* Navigation Links */}
                <ul className={`header__links ${menuOpen ? 'header__links--open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`header__link ${activeSection === item.id ? 'header__link--active' : ''}`}
                                onClick={handleNavClick}
                            >
                                {item.label}
                                {activeSection === item.id && <span className="header__link-indicator"></span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
