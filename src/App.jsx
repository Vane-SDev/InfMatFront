import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useMobilePerformance } from './hooks/useMobileOptimization';

// Importamos nuestras páginas
import HomePage from './pages/HomePage';
import ClasesPage from './pages/ClasesPage';
import BlogPage from './pages/BlogPage';

import './App.css';

function App() {
  // Aplicar optimizaciones móviles
  useMobilePerformance();

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clases" element={<ClasesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Próximamente añadiremos más rutas aquí */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;