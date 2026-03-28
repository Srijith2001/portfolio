import { motion } from 'framer-motion';
import { GraduationCap, Star, BookOpen } from 'lucide-react';
import { resumeData } from '../../resumeData';
import './Education.css';

const Education = () => {
  const edu = resumeData.education;

  return (
    <section id="education">
      <div className="container">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title">Education</h2>

        <motion.div
          className="edu-card card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="edu-header">
            <div className="edu-title-group">
              <GraduationCap className="edu-icon" size={24} />
              <h3 className="edu-name">{edu.degree}</h3>
              <span className="chip edu-badge">Honors</span>
            </div>
          </div>

          <p className="edu-desc"><strong>{edu.institution}</strong> • {edu.timeline}</p>
          <p className="edu-desc">{edu.publications}</p>

          <div className="edu-meta">
            <span className="edu-stat">
              <BookOpen size={16} />
              GPA {edu.gpa}
            </span>
            <span className="edu-stat">
              <Star size={16} className="edu-star" />
              University Honors
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
