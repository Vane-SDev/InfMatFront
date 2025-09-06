import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaFacebook, 
    FaTwitter, 
    FaInstagram, 
    FaLinkedin, 
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaBook,
    FaUsers,
    FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
        <footer className="site-footer">
            <div className="footer-background">
                <div className="footer-gradient"></div>
                <div className="footer-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                </div>
            </div>

            <div className="container">
                <div className="footer-content">
                    {/* Sección principal del footer */}
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src="/Logo.png" alt="Logo de Infinitamente Matemático" />
                                <span className="logo-text">Infinitamente Matemático</span>
                            </div>
                            <p className="footer-description">
                                Transformamos la relación de los estudiantes con las matemáticas 
                                a través de enseñanza personalizada y metodologías innovadoras.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="social-link" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <div className="footer-column">
                                <h3 className="footer-title">Servicios</h3>
                                <ul className="footer-list">
                                    <li><Link to="/clases">Clases Online</Link></li>
                                    <li><Link to="/tutoria">Tutoría Personalizada</Link></li>
                                    <li><Link to="/grupos">Clases Grupales</Link></li>
                                    <li><Link to="/preparacion">Preparación Exámenes</Link></li>
                                    <li><Link to="/universidad">Preparación Universidad</Link></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h3 className="footer-title">Recursos</h3>
                                <ul className="footer-list">
                                    <li><Link to="/blog">Blog Educativo</Link></li>
                                    <li><Link to="/recursos">Materiales Gratuitos</Link></li>
                                    <li><Link to="/ejercicios">Ejercicios Prácticos</Link></li>
                                    <li><Link to="/videos">Videos Tutoriales</Link></li>
                                    <li><Link to="/descargas">Descargas</Link></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h3 className="footer-title">Comunidad</h3>
                                <ul className="footer-list">
                                    <li><Link to="/comunidad">Foro de Estudiantes</Link></li>
                                    <li><Link to="/testimonios">Testimonios</Link></li>
                                    <li><Link to="/eventos">Eventos</Link></li>
                                    <li><Link to="/webinars">Webinars Gratuitos</Link></li>
                                    <li><Link to="/soporte">Centro de Ayuda</Link></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h3 className="footer-title">Contacto</h3>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <FaEnvelope className="contact-icon" />
                                        <span>info@infinitamentematematico.com</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaPhone className="contact-icon" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="contact-item">
                                        <FaMapMarkerAlt className="contact-icon" />
                                        <span>Ciudad, País</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <div className="newsletter-content">
                            <div className="newsletter-text">
                                <FaGraduationCap className="newsletter-icon" />
                                <div>
                                    <h3>Mantente Actualizado</h3>
                                    <p>Recibe tips, recursos y ofertas exclusivas en tu correo</p>
                                </div>
                            </div>
                            <form className="newsletter-form">
                                <input 
                                    type="email" 
                                    placeholder="Tu correo electrónico" 
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-button">
                                    Suscribirse
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <div className="footer-copyright">
                                <p>&copy; 2024 Infinitamente Matemático. Todos los derechos reservados.</p>
                            </div>
                            <div className="footer-legal">
                                <Link to="/privacidad">Política de Privacidad</Link>
                                <Link to="/terminos">Términos de Servicio</Link>
                                <Link to="/cookies">Política de Cookies</Link>
                            </div>
                        </div>
                        <div className="footer-made-with">
                            <span>Hecho con</span>
                            <FaHeart className="heart-icon" />
                            <span>para estudiantes</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;