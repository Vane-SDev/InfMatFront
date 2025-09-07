import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Efecto para detectar el scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquear scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    // Cerrar el menú al cambiar de ruta
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <NavLink to="/">
                        <img src="/Logo.png" alt="Logo de Infinitamente Matemático" />
                    </NavLink>
                </div>

                {/* --- MENÚ UNIFICADO --- */}
                <nav className={`main-nav ${isMobileMenuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
                    <ul className="nav-list">
                        <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</NavLink></li>
                        <li><NavLink to="/clases" onClick={() => setIsMobileMenuOpen(false)}>Clases</NavLink></li>
                        <li><NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink></li>
                        {/* Agrega aquí más enlaces cuando los necesites */}
                    </ul>
                    <div className="header-actions-mobile">
                        <NavLink to="/login" className="btn btn-outline" onClick={() => setIsMobileMenuOpen(false)}>Iniciar Sesión</NavLink>
                        <NavLink to="/clases" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Comenzar</NavLink>
                    </div>
                </nav>

                <div className="header-actions-desktop">
                    <NavLink to="/login" className="btn btn-outline">Iniciar Sesión</NavLink>
                    <NavLink to="/clases" className="btn btn-primary">Comenzar</NavLink>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Alternar menú de navegación"
                    aria-expanded={isMobileMenuOpen}
                >
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;