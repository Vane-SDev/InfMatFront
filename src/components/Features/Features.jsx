import React from 'react';
import { 
    FaUserGraduate, 
    FaLightbulb, 
    FaChartLine, 
    FaClock, 
    FaUsers, 
    FaTrophy,
    FaRocket,
    FaHeart
} from 'react-icons/fa';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: FaUserGraduate,
            title: "Enseñanza Personalizada",
            description: "Cada estudiante es único. Adapto cada clase a tu ritmo, estilo de aprendizaje y objetivos específicos.",
            color: "var(--primary-500)",
            delay: "0.1s"
        },
        {
            icon: FaLightbulb,
            title: "Claridad y Comprensión",
            description: "Mi objetivo no es que memorices, sino que entiendas. Verás la matemática con otros ojos, conectándola con el mundo real.",
            color: "var(--accent-amber)",
            delay: "0.2s"
        },
        {
            icon: FaChartLine,
            title: "Resultados Comprobados",
            description: "Años de experiencia ayudando a alumnos a aprobar exámenes, ingresar a la universidad y redescubrir su confianza.",
            color: "var(--accent-emerald)",
            delay: "0.3s"
        },
        {
            icon: FaClock,
            title: "Flexibilidad Total",
            description: "Clases adaptadas a tu horario. Aprende cuando quieras, donde quieras, a tu propio ritmo.",
            color: "var(--accent-blue)",
            delay: "0.4s"
        },
        {
            icon: FaUsers,
            title: "Comunidad Activa",
            description: "Únete a una comunidad de estudiantes que comparten tu pasión por aprender y superar desafíos matemáticos.",
            color: "var(--primary-600)",
            delay: "0.5s"
        },
        {
            icon: FaTrophy,
            title: "Logros Garantizados",
            description: "Metodología probada que ha ayudado a cientos de estudiantes a alcanzar sus metas académicas y profesionales.",
            color: "var(--accent-rose)",
            delay: "0.6s"
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header text-center">
                    <div className="section-badge animate-fade-in-up">
                        <FaRocket className="badge-icon" />
                        <span>Metodología Avanzada</span>
                    </div>
                    <h2 className="section-title animate-fade-in-up">
                        Una Experiencia de Aprendizaje 
                        <span className="text-gradient"> Pensada Para Ti</span>
                    </h2>
                    <p className="section-subtitle animate-fade-in-up">
                        Descubre por qué miles de estudiantes han transformado su relación 
                        con las matemáticas a través de nuestro enfoque innovador.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div 
                                key={index}
                                className="feature-card animate-fade-in-up"
                                style={{ 
                                    animationDelay: feature.delay,
                                    '--feature-color': feature.color 
                                }}
                            >
                                <div className="feature-icon-wrapper">
                                    <IconComponent className="feature-icon" />
                                    <div className="icon-bg"></div>
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                                <div className="feature-hover-effect"></div>
                            </div>
                        );
                    })}
                </div>

                <div className="features-cta animate-fade-in-up">
                    <div className="cta-content">
                        <FaHeart className="cta-icon" />
                        <h3>¿Listo para transformar tu aprendizaje?</h3>
                        <p>Únete a nuestra comunidad y descubre el poder de las matemáticas bien enseñadas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;