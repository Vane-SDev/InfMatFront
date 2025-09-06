import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaArrowRight, FaStar, FaUsers, FaClock } from 'react-icons/fa';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-background">
                <div className="cta-gradient"></div>
                <div className="cta-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>
                <div className="cta-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
            </div>

            <div className="container">
                <div className="cta-content">
                    <div className="cta-badge animate-fade-in-up">
                        <FaRocket className="badge-icon" />
                        <span>¡Tu Transformación Comienza Aquí!</span>
                    </div>

                    <h2 className="cta-title animate-fade-in-up">
                        ¿Listo para Transformar tu 
                        <span className="text-gradient"> Relación con las Matemáticas?</span>
                    </h2>

                    <p className="cta-subtitle animate-fade-in-up">
                        Da el primer paso hacia el éxito académico. Agenda una clase de consulta 
                        gratuita y descubre un método de enseñanza diseñado específicamente para tu éxito.
                    </p>

                    <div className="cta-stats animate-fade-in-up">
                        <div className="stat">
                            <FaUsers className="stat-icon" />
                            <div className="stat-content">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Estudiantes Satisfechos</div>
                            </div>
                        </div>
                        <div className="stat">
                            <FaStar className="stat-icon" />
                            <div className="stat-content">
                                <div className="stat-number">4.9/5</div>
                                <div className="stat-label">Calificación Promedio</div>
                            </div>
                        </div>
                        <div className="stat">
                            <FaClock className="stat-icon" />
                            <div className="stat-content">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Soporte Disponible</div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-actions animate-fade-in-up">
                        <Link to="/clases" className="btn btn-primary btn-large">
                            <span>Agendar Clase Gratuita</span>
                            <FaArrowRight className="btn-icon" />
                        </Link>
                        <Link to="/blog" className="btn btn-secondary btn-large">
                            <span>Ver Testimonios</span>
                        </Link>
                    </div>

                    <div className="cta-guarantee animate-fade-in-up">
                        <div className="guarantee-content">
                            <FaStar className="guarantee-icon" />
                            <span>Garantía de satisfacción del 100% o te devolvemos tu dinero</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;