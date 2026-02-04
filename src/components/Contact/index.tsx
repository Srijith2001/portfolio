import { useState, type FormEvent } from 'react';
import githubIcon from '../../assets/images/github.png';
import gmailIcon from '../../assets/images/gmail.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import whatsappIcon from '../../assets/images/whatsapp.png';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const mailtoLink = `mailto:srijithbharadwajd@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;

        // Show success state
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Srijith2001', icon: githubIcon },
        { name: 'LinkedIn', url: 'http://www.linkedin.com/in/srijith-bharadwaj-d', icon: linkedinIcon },
        { name: 'Gmail', url: 'mailto:srijithbharadwajd@gmail.com', icon: gmailIcon },
        // { name: 'Instagram', url: 'https://www.instagram.com/srijith_bharadwaj', icon: instagramIcon },
        { name: 'WhatsApp', url: 'https://wa.me/918754113045', icon: whatsappIcon }
    ];

    if (isSubmitted) {
        return (
            <section id="contact" className="contact">
                <div className="contact__container">
                    <div className="contact__header">
                        <h2 className="contact__title">
                            <span className="gradient-text">Get In Touch</span>
                        </h2>
                    </div>
                    <div className="contact__form">
                        <div className="contact__success">
                            <span className="contact__success-icon">✅</span>
                            Opening your email client... Thanks for reaching out!
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <div className="contact__header">
                    <h2 className="contact__title">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                    <p className="contact__subtitle">Have a project in mind? Let's talk about it.</p>
                </div>

                <div className="contact__content">
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-row">
                            <div className="contact__form-group">
                                <label className="contact__label" htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="contact__input"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact__form-group">
                                <label className="contact__label" htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="contact__input"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact__form-group contact__form-group--full">
                            <label className="contact__label" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="contact__input"
                                placeholder="Project Inquiry"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-group contact__form-group--full">
                            <label className="contact__label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="contact__textarea"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="contact__submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
                        </button>
                    </form>

                    <div className="contact__social">
                        <h3 className="contact__social-title">Or connect with me on</h3>
                        <div className="contact__social-links">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__social-link"
                                    title={link.name}
                                >
                                    <img src={link.icon} alt={link.name} className="contact__social-icon" />
                                    <span className="contact__social-name">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
