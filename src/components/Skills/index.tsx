import { useEffect, useRef, useState } from 'react';
import { resumeData } from '../../resumeData';
import './Skills.css';

const Skills = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const categoryMeta: { [key: string]: { icon: string; title: string } } = {
        languages: { icon: '💻', title: 'Languages' },
        mobileFrontend: { icon: '📱', title: 'Mobile & Frontend' },
        backend: { icon: '⚙️', title: 'Backend' },
        databasesMessaging: { icon: '🗄️', title: 'Databases & Messaging' },
        toolsCloud: { icon: '☁️', title: 'Tools & Cloud' }
    };

    return (
        <section id="skills" className="skills" ref={sectionRef}>
            <div className="skills__container">
                <div className="skills__header">
                    <h2 className="skills__title">
                        <span className="gradient-text">Technical Skills</span>
                    </h2>
                    <p className="skills__subtitle">Technologies I work with every day</p>
                </div>

                <div className="skills__grid">
                    {Object.entries(resumeData.skills).map(([key, items], index) => (
                        <div
                            key={key}
                            className={`skills__category ${isVisible ? 'skills__category--visible' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="skills__category-icon">{categoryMeta[key]?.icon}</div>
                            <h3 className="skills__category-title">{categoryMeta[key]?.title}</h3>
                            <div className="skills__list">
                                {items.map((skill, i) => (
                                    <span key={i} className="skills__item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
