import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { resumeData } from '../../resumeData';
import './Contact.css';

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const info = resumeData.personalInfo;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleMailTo = () => {
    window.location.href = `mailto:${info.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>

        <motion.div
          className="contact-card card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-layout">
            <div className="contact-info">
              <h3 className="contact-heading">Let's build something together.</h3>
              <p className="contact-sub">
                Feel free to reach out for collaborations, opportunities, or just a quick chat. 
                I'm always open to discussing new projects and ideas.
              </p>
              
              <div className="social-links">
                <a href={info.linkedin} target="_blank" rel="noreferrer" className="social-link">
                  <LinkedinIcon size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href={`mailto:${info.email}`} className="social-link">
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="input-group">
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Subject" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="input-group">
                <textarea 
                  className="input-field textarea-field" 
                  placeholder="Your message..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={5}
                />
              </div>

              <div className="form-actions">
                <button onClick={handleMailTo} className="btn-primary form-submit">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
