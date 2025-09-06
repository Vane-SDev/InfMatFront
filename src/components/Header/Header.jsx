import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobileOptimization, useSwipeGesture } from '../../hooks/useMobileOptimization';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { isMobile, isTouch } = useMobileOptimization();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar menú móvil al cambiar de ruta
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Cerrar menú móvil al hacer scroll
    useEffect(() => {
        if (isMobileMenuOpen) {
            const handleScroll = () => setIsMobileMenuOpen(false);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        // Vibración táctil si está disponible
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Gestos de swipe para cerrar menú móvil
    useSwipeGesture(
        () => isMobileMenuOpen && setIsMobileMenuOpen(false), // swipe left
        () => isMobileMenuOpen && setIsMobileMenuOpen(false)  // swipe right
    );

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Overlay para el menú móvil */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-menu-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            
            <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-content">
                    <div className="logo">
                        <Link to="/" className="logo-link">
                            <img src="/Logo.png" alt="Logo de Infinitamente Matemático" />
                            <span className="logo-text">Infinitamente Matemático</span>
                        </Link>
                    </div>

                    <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <div className="mobile-nav-header">
                            <div className="mobile-nav-logo">
                                <img src="/Logo.png" alt="Logo" />
                                <span>Infinitamente Matemático</span>
                            </div>
                            <button 
                                className="mobile-close-btn"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Cerrar menú"
                            >
                                <span>×</span>
                            </button>
                        </div>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link 
                                    to="/" 
                                    className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    to="/clases" 
                                    className={`nav-link ${isActive('/clases') ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Clases
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    to="/blog" 
                                    className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    to="/comunidad" 
                                    className={`nav-link ${isActive('/comunidad') ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Comunidad
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    to="/sobre-mi" 
                                    className={`nav-link ${isActive('/sobre-mi') ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sobre Mí
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to="/login" className="btn btn-outline">
                            Iniciar Sesión
                        </Link>
                        <Link to="/clases" className="btn btn-primary">
                            Comenzar
                        </Link>
                        
                        <button 
                            className="mobile-menu-toggle"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;