import githubIcon from '../../assets/images/github.png';
import gmailIcon from '../../assets/images/gmail.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import whatsappIcon from '../../assets/images/whatsapp.png';
import { resumeData } from '../../resumeData';
import './Footer.css';

const Footer = () => {
    const { email } = resumeData.personalInfo;

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Srijith2001', icon: githubIcon },
        { name: 'LinkedIn', url: 'http://www.linkedin.com/in/srijith-bharadwaj-d', icon: linkedinIcon },
        { name: 'Gmail', url: `mailto:${email}`, icon: gmailIcon },
        // { name: 'Instagram', url: 'https://www.instagram.com/srijith_bharadwaj', icon: instagramIcon },
        { name: 'WhatsApp', url: 'https://wa.me/918754113045', icon: whatsappIcon }
    ];

    return (
        <footer className="footer">
            <div className="container footer__content">
                <div className="footer__cta">
                    <h3 className="footer__cta-title">
                        <span className="gradient-text">Let's Work Together</span>
                    </h3>
                    <p className="footer__cta-text">
                        I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                <div className="footer__links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target={link.name === 'Gmail' ? undefined : '_blank'}
                            rel={link.name === 'Gmail' ? undefined : 'noopener noreferrer'}
                            className="footer__link"
                            title={link.name}
                        >
                            <img src={link.icon} alt={link.name} className="footer__icon" />
                        </a>
                    ))}
                </div>

                <p className="footer__copyright">
                    Built with <span className="footer__heart">❤️</span> using React & TypeScript
                </p>
                <p className='footer__copyright'>
                    © {new Date().getFullYear()} Srijith Bharadwaj D
                </p>
            </div>
        </footer>
    );
};

export default Footer;
