import { useEffect, useRef, useState } from 'react';
import { resumeData } from '../../resumeData';
import './Education.css';

const Education = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { degree, institution, gpa, timeline, publications } = resumeData.education;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="education" className="education container" ref={sectionRef}>
            <div className="education__header">
                <h2 className="education__title">
                    <span className="gradient-text">Education</span>
                </h2>
                <p className="education__subtitle">Academic foundation and research</p>
            </div>

            <div className={`education__card ${isVisible ? 'education__card--visible' : ''}`}>
                <div className="education__icon">🎓</div>
                <h3 className="education__degree">{degree}</h3>
                <div className="education__institution">{institution}</div>

                <div className="education__stats">
                    <div className="education__stat">
                        <div className="education__stat-value">{gpa}</div>
                        <div className="education__stat-label">GPA</div>
                    </div>
                    <div className="education__stat">
                        <div className="education__stat-value">{timeline.split(' – ')[1]}</div>
                        <div className="education__stat-label">Graduated</div>
                    </div>
                    <div className="education__stat">
                        <div className="education__stat-value">2</div>
                        <div className="education__stat-label">Publications</div>
                    </div>
                </div>

                <div className="education__publication">
                    <span>📄</span> {publications}
                </div>
            </div>
        </section>
    );
};

export default Education;
