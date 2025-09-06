import React from 'react';
import { FaQuoteLeft, FaStar, FaGraduationCap } from 'react-icons/fa';
import './Testimonials.css';

// Datos de prueba. Más adelante vendrán de la API.
const testimonialsData = [
    {
        id: 1,
        quote: "Vane no solo me ayudó a aprobar Análisis Matemático, sino que me enseñó a pensar de una forma que nunca creí posible. ¡Una genia total!",
        author: "Martina G.",
        course: "Estudiante de Ingeniería",
        rating: 5,
        avatar: "👩‍🎓"
    },
    {
        id: 2,
        quote: "Tenía pánico a los exámenes de ingreso. Con su paciencia y su método, gané la confianza que necesitaba y logré mi objetivo. ¡Mil gracias!",
        author: "Lucas R.",
        course: "Ingreso a Medicina",
        rating: 5,
        avatar: "👨‍⚕️"
    },
    {
        id: 3,
        quote: "Las clases son súper dinámicas. Por primera vez, siento que no estoy memorizando fórmulas, sino entendiendo de verdad la matemática.",
        author: "Sofía C.",
        course: "Alumna de Secundaria",
        rating: 5,
        avatar: "👩‍🎒"
    },
    {
        id: 4,
        quote: "El método de enseñanza es increíble. Pasé de tener miedo a las matemáticas a amarlas. Ahora estudio Ingeniería gracias a Vane.",
        author: "Carlos M.",
        course: "Estudiante de Ingeniería",
        rating: 5,
        avatar: "👨‍🔬"
    },
    {
        id: 5,
        quote: "Las clases online son tan efectivas como las presenciales. La plataforma es genial y el material de apoyo excelente.",
        author: "Ana L.",
        course: "Preparación Universitaria",
        rating: 5,
        avatar: "👩‍💼"
    },
    {
        id: 6,
        quote: "Vane tiene una paciencia infinita y explica de manera que cualquiera puede entender. Recomiendo 100% sus clases.",
        author: "Diego P.",
        course: "Estudiante de Economía",
        rating: 5,
        avatar: "👨‍💻"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header text-center">
                    <div className="section-badge animate-fade-in-up">
                        <FaGraduationCap className="badge-icon" />
                        <span>Testimonios Reales</span>
                    </div>
                    <h2 className="section-title animate-fade-in-up">
                        Lo que Dicen Nuestros 
                        <span className="text-gradient"> Estudiantes</span>
                    </h2>
                    <p className="section-subtitle animate-fade-in-up">
                        Descubre las historias de éxito de estudiantes que han transformado 
                        su relación con las matemáticas gracias a nuestro método.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <div 
                            key={testimonial.id} 
                            className="testimonial-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    {testimonial.avatar}
                                </div>
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                            </div>
                            
                            <div className="testimonial-content">
                                <FaQuoteLeft className="quote-icon" />
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                            </div>
                            
                            <div className="testimonial-author">
                                <span className="author-name">{testimonial.author}</span>
                                <span className="author-course">{testimonial.course}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials-cta animate-fade-in-up">
                    <div className="cta-content">
                        <h3>¿Listo para ser el próximo testimonio de éxito?</h3>
                        <p>Únete a cientos de estudiantes que ya transformaron su aprendizaje</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;