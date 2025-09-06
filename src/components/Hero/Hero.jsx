import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Elementos decorativos de fondo */}
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                    <div className="particle particle-5"></div>
                </div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in-up">
                        <span className="badge-icon">🎯</span>
                        <span>Clases personalizadas • 100% Online</span>
                    </div>
                    
                    <h1 className="hero-title animate-fade-in-up">
                        Desbloquea tu 
                        <span className="text-gradient"> Potencial Matemático</span>
                    </h1>
                    
                    <p className="hero-subtitle animate-fade-in-up">
                        Transforma tu relación con las matemáticas a través de clases online 
                        personalizadas que se adaptan a tu ritmo de aprendizaje. 
                        Descubre una nueva forma de entender los números.
                    </p>
                    
                    <div className="hero-stats animate-fade-in-up">
                        <div className="stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Estudiantes</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Aprobación</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Soporte</div>
                        </div>
                    </div>
                    
                    <div className="hero-actions animate-fade-in-up">
                        <Link to="/clases" className="btn btn-primary">
                            <span>Ver Planes de Clases</span>
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link to="/blog" className="btn btn-secondary">
                            <span>Explorar Blog</span>
                        </Link>
                    </div>
                </div>
                
                <div className="hero-visual animate-fade-in-right">
                    <div className="math-visualization">
                        <div className="equation equation-1 animate-float">
                            <span>∫</span>
                            <span>f(x)dx</span>
                        </div>
                        <div className="equation equation-2 animate-float" style={{animationDelay: '0.5s'}}>
                            <span>lim</span>
                            <span>x→∞</span>
                        </div>
                        <div className="equation equation-3 animate-float" style={{animationDelay: '1s'}}>
                            <span>∑</span>
                            <span>n=1</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;