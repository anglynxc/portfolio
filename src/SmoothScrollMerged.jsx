// ============ 1) App.jsx — bagian import di atas (jangan ada import ganda untuk react) ============
import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';


// ============ 2) App.jsx — di dalam function App(), gantikan useEffect Lenis yang lama ============
useEffect(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll halus (roda mouse, trackpad, dan klik menu)
  let lenis;
  let frame;
  if (!reduceMotion) {
    lenis = new Lenis({
      duration: 1.4, // makin besar makin "melayang"
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -90, duration: 1.6 }, // -90 = tinggi navbar
    });
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
  }

  // Isi tiap section muncul pelan saat masuk layar (kecuali hero)
  const targets = document.querySelectorAll('main section:not(#home) > .container');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  return () => {
    cancelAnimationFrame(frame);
    if (lenis) lenis.destroy();
    observer.disconnect();
    targets.forEach((el) => el.classList.remove('reveal', 'is-visible'));
  };
}, []);


/* ============ 3) App.css — tempel di paling bawah (salin tanpa tanda komentar ini) ============

.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition:
    opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

*/
