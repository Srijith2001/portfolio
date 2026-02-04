import { useEffect, useRef } from 'react';
import { resumeData } from '../../resumeData';
import './Experience.css';

const Experience = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll('.experience__job');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('experience__job--visible');
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="experience container" ref={sectionRef}>
            <div className="experience__header">
                <h2 className="experience__title">
                    <span className="gradient-text">Work Experience</span>
                </h2>
                <p className="experience__subtitle">My professional journey building scalable systems</p>
            </div>

            <div className="experience__timeline">
                <div className="experience__timeline-line"></div>

                {resumeData.experience.map((job, index) => (
                    <div key={index} className="experience__job">
                        <div className="experience__dot"></div>
                        <div className="experience__card">
                            <h3 className="experience__role">{job.role}</h3>
                            <div className="experience__company">@ {job.company}</div>
                            <div className="experience__period">
                                <span>📅</span> {job.period}
                            </div>

                            <div className="experience__achievements">
                                {job.achievements.map((item, i) => (
                                    <div key={i} className="experience__achievement">
                                        <span className="experience__achievement-icon">▹</span>
                                        <div>
                                            <div className="experience__achievement-title">{item.title}</div>
                                            <p className="experience__achievement-desc">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
