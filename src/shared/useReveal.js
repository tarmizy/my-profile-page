import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
