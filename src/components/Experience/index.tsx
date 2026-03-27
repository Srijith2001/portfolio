import { motion } from 'framer-motion';
import { resumeData } from '../../resumeData';
import './Experience.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 }
};

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {resumeData.experience.map((job, i) => (
            <motion.div key={i} className="timeline-item" {...fadeUp}>
              <div className="timeline-marker">
                <div className="gh-commit-icon">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                    <path fillRule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path>
                  </svg>
                </div>
                {i < resumeData.experience.length - 1 && <div className="marker-line" />}
              </div>

              <div className="timeline-content card gh-timeline-card">
                <div className="job-header">
                  <div>
                    <h3 className="job-company">
                      {job.role} <span className="gh-tag">at {job.company}</span>
                    </h3>
                    <p className="job-period">committed {job.period}</p>
                  </div>
                  <div className="gh-commit-hash">
                    {Math.random().toString(16).substring(2, 9)}
                  </div>
                </div>

                <div className="achievements">
                  {job.achievements.map((ach, j) => (
                    <div key={j} className="achievement gh-achievement">
                      <span className="ach-title">{ach.title}</span>
                      <p className="ach-desc">{ach.description}</p>
                    </div>
                  ))}
                </div>

                {job.techStack && (
                  <div className="gh-tech-stack">
                    {job.techStack.map((tech, j) => (
                      <span key={j} className="gh-label gh-label-small">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
