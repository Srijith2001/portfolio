import { motion } from 'framer-motion';
import { Building2, Zap, Rocket, Cpu, MessageSquare } from 'lucide-react';
import { resumeData } from '../../resumeData';
import profileImage from '/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container-wide hero-container">
        <div className="hero-layout">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="hero-name">
              Hi there, I'm Srijith <span className="hello-accent">👋</span>
            </h1>

            <p className="hero-subtitle">
              {resumeData.personalInfo.summary.split('. ')[0] + '.'}
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <Building2 className="stat-icon" size={20} />
                <span>I’m currently building retail mobile platforms & microservices at <strong>Swiggy</strong></span>
              </div>
              <div className="stat-item">
                <Zap className="stat-icon" size={20} />
                <span>I specialize in <strong>React, React Native</strong> and <strong>Golang</strong></span>
              </div>
              <div className="stat-item">
                <Rocket className="stat-icon" size={20} />
                <span>I have a proven track record of migrating legacy systems to microservices</span>
              </div>
              <div className="stat-item">
                <Cpu className="stat-icon" size={20} />
                <span>I focus on high-throughput data using <strong>Kafka</strong> and <strong>Redis</strong></span>
              </div>
              <div className="stat-item">
                <MessageSquare className="stat-icon" size={20} />
                <span>Ask me about mobile architecture, Golang, and performance optimization.</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Get in Touch</a>
              <a href="#experience" className="btn-secondary">View Work</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-avatar-wrapper">
              <img src={profileImage} alt="Srijith Bharadwaj D" className="hero-profile-image" />
              <div className="hero-status-circle">
                <Rocket size={18} strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
