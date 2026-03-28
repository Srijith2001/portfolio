import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
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
        <span className="section-label">Where I've Worked</span>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {resumeData.experience.map((job, i) => (
            <motion.div key={i} className="timeline-item" {...fadeUp}>
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={16} />
                </div>
                {i < resumeData.experience.length - 1 && <div className="marker-line" />}
              </div>

              <div className="timeline-content card timeline-card">
                <div className="job-header">
                  <div>
                    <h3 className="job-company">
                      {job.role} <span className="job-at">at {job.company}</span>
                    </h3>
                    <p className="job-period">{job.period}</p>
                  </div>
                </div>

                <div className="achievements">
                  {job.achievements.map((ach, j) => (
                    <div key={j} className="achievement">
                      <span className="ach-title">{ach.title}</span>
                      <p className="ach-desc">{ach.description}</p>
                    </div>
                  ))}
                </div>

                {job.techStack && (
                  <div className="tech-stack">
                    {job.techStack.map((tech, j) => (
                      <span key={j} className="chip tech-chip">{tech}</span>
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
