import { useEffect, useState } from 'react';

export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const currentOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      
      setIsMobile(mobile);
      setIsTouch(touch);
      setOrientation(currentOrientation);
    };

    // Verificar al cargar
    checkMobile();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    // Optimizaciones para móvil
    if (isMobile) {
      // Prevenir zoom en inputs
      const preventZoom = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          const viewport = document.querySelector('meta[name=viewport]');
          if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
          }
        }
      };

      // Restaurar zoom después de un delay
      const restoreZoom = () => {
        setTimeout(() => {
          const viewport = document.querySelector('meta[name=viewport]');
          if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1');
          }
        }, 1000);
      };

      document.addEventListener('focusin', preventZoom);
      document.addEventListener('focusout', restoreZoom);

      return () => {
        window.removeEventListener('resize', checkMobile);
        window.removeEventListener('orientationchange', checkMobile);
        document.removeEventListener('focusin', preventZoom);
        document.removeEventListener('focusout', restoreZoom);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, [isMobile]);

  return { isMobile, isTouch, orientation };
};

// Hook para detectar gestos de swipe
export const useSwipeGesture = (onSwipeLeft, onSwipeRight) => {
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      
      // Solo procesar si el movimiento horizontal es mayor que el vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight]);
};

// Hook para optimizar el rendimiento en móvil
export const useMobilePerformance = () => {
  useEffect(() => {
    // Reducir animaciones si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--transition-fast', '0ms');
      document.documentElement.style.setProperty('--transition-normal', '0ms');
      document.documentElement.style.setProperty('--transition-slow', '0ms');
    }

    // Optimizar para dispositivos de baja potencia
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                          navigator.deviceMemory <= 2 ||
                          /Android.*Chrome\/[0-5]/.test(navigator.userAgent);

    if (isLowEndDevice) {
      // Reducir efectos visuales
      document.documentElement.classList.add('low-end-device');
    }

    // Preload crítico para móvil
    const preloadCritical = () => {
      const criticalImages = [
        '/Logo.png'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCritical();
  }, []);
};
