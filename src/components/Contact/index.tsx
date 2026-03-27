import { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../../resumeData';
import './Contact.css';

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
        <motion.div
          className="gh-issue-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gh-issue-header">
            <h2 className="gh-issue-title">Open a new issue</h2>
            <p className="gh-issue-sub">Connect with me for a project or collaboration.</p>
          </div>

          <div className="gh-issue-layout">
            <div className="gh-issue-avatar">
              <svg aria-hidden="true" height="40" viewBox="0 0 16 16" version="1.1" width="40" data-view-component="true" style={{ color: "var(--text-muted)" }}>
                  <path fillRule="evenodd" d="M10.561 8.073a6.005 6.005 0 013.432 5.142.75.75 0 11-1.498.07 4.5 4.5 0 00-8.99 0 .75.75 0 01-1.498-.07 6.004 6.004 0 013.431-5.142 3.999 3.999 0 115.123 0zM10.5 5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill="currentColor"></path>
              </svg>
            </div>
            
            <div className="gh-issue-box">
              <div className="gh-issue-input-group">
                <input 
                  type="text" 
                  className="gh-input-title" 
                  placeholder="Title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="gh-issue-body-group">
                <div className="gh-tab-nav">
                  <button className="gh-tab active">Write</button>
                  <button className="gh-tab">Preview</button>
                </div>
                
                <div className="gh-textarea-wrapper">
                  <textarea 
                    className="gh-textarea" 
                    placeholder="Leave a comment"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <div className="gh-textarea-footer">
                    <span>Markdown is supported</span>
                  </div>
                </div>
              </div>

              <div className="gh-issue-actions">
                <a href={info.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">View LinkedIn</a>
                <button onClick={handleMailTo} className="btn-primary">Submit new issue</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
