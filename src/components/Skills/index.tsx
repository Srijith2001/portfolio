import { motion } from 'framer-motion';
import { resumeData } from '../../resumeData';
import './Skills.css';

const languageStats = [
  { name: 'JavaScript', color: '#f1e05a', percent: 40 },
  { name: 'Go', color: '#00ADD8', percent: 30 },
  { name: 'TypeScript', color: '#3178c6', percent: 15 },
  { name: 'Java', color: '#b07219', percent: 10 },
  { name: 'C++', color: '#f34b7d', percent: 5 },
];

const skillCategories = [
  { label: 'Mobile & Frontend', items: resumeData.skills.mobileFrontend },
  { label: 'Backend', items: resumeData.skills.backend },
  { label: 'Databases & Messaging', items: resumeData.skills.databasesMessaging },
  { label: 'Tools & Cloud', items: resumeData.skills.toolsCloud },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-label">Languages & Technologies</span>
        <h2 className="section-title">Skills Overview</h2>

        <div className="lang-section">
          <h3 className="lang-title">Language Distribution</h3>
          <div className="lang-bar">
            {languageStats.map((lang, i) => (
              <motion.div
                key={i}
                className="lang-segment"
                style={{ backgroundColor: lang.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div className="lang-legend">
            {languageStats.map((lang, i) => (
              <div key={i} className="lang-item">
                <span className="lang-dot" style={{ backgroundColor: lang.color }} />
                <span className="lang-name">{lang.name}</span>
                <span className="lang-percent">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="cat-label">{cat.label}</h3>
              <div className="chip-group">
                {cat.items.map((skill, j) => (
                  <span key={j} className="chip skill-chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
