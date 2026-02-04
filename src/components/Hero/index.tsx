import { useEffect, useState } from 'react';
import githubIcon from '../../assets/images/github.png';
import gmailIcon from '../../assets/images/gmail.png';
import profileImage from '../../assets/images/img_2.jpg';
import instagramIcon from '../../assets/images/instagram.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import whatsappIcon from '../../assets/images/whatsapp.png';
import resumePdf from '../../assets/pdfs/resume.pdf';
import { resumeData } from '../../resumeData';
import './Hero.css';

const Hero = () => {
    const { name, summary, email } = resumeData.personalInfo;
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const roles = ['Full Stack Developer', 'Software Engineer'];
    const [roleIndex, setRoleIndex] = useState(0);

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Srijith2001', icon: githubIcon },
        { name: 'LinkedIn', url: 'http://www.linkedin.com/in/srijith-bharadwaj-d', icon: linkedinIcon },
        { name: 'Gmail', url: `mailto:${email}`, icon: gmailIcon },
        { name: 'Instagram', url: 'https://www.instagram.com/srijith_bharadwaj', icon: instagramIcon },
        { name: 'WhatsApp', url: 'https://wa.me/918754113045', icon: whatsappIcon }
    ];

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let charIndex = 0;

        if (isTyping) {
            const typeInterval = setInterval(() => {
                if (charIndex <= currentRole.length) {
                    setDisplayText(currentRole.slice(0, charIndex));
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => setIsTyping(false), 2000);
                }
            }, 80);
            return () => clearInterval(typeInterval);
        } else {
            const deleteInterval = setInterval(() => {
                if (charIndex > 0) {
                    charIndex--;
                    setDisplayText(currentRole.slice(0, charIndex));
                } else {
                    clearInterval(deleteInterval);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                    setIsTyping(true);
                }
            }, 40);
            return () => clearInterval(deleteInterval);
        }
    }, [roleIndex, isTyping]);

    return (
        <section id="about" className="hero">
            <div className="hero__orb hero__orb--1"></div>
            <div className="hero__orb hero__orb--2"></div>

            <div className="hero__container">
                <div className="hero__content">
                    <p className="hero__greeting">👋 Hello, I'm</p>
                    <h1 className="hero__name">{name}</h1>
                    <div className="hero__role-container">
                        <span className="hero__role">{displayText}</span>
                        <span className="hero__cursor"></span>
                    </div>
                    <p className="hero__summary">{summary}</p>

                    <div className="hero__cta-group">
                        <a href={resumePdf} download="Srijith_Bharadwaj_Resume.pdf" className="hero__btn hero__btn--primary">
                            Download Resume 📄
                        </a>
                    </div>

                    <div className="hero__social">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero__social-link"
                                title={link.name}
                            >
                                <img src={link.icon} alt={link.name} className="hero__social-icon" />
                                <span className="hero__social-text">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hero__image-wrapper">
                    <div className="hero__image-container">
                        <div className="hero__image-glow"></div>
                        <img src={profileImage} alt={name} className="hero__image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
