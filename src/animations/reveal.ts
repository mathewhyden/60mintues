import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export function initReveals() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return () => {};
  const ctx = gsap.context(() => {
    gsap.from('.hero-copy > *', { y: 26, opacity: 0, duration: 0.8, stagger: 0.11, ease: 'power3.out', delay: 0.15 });
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, { y: 28, opacity: 0, duration: 0.75, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
  });
  return () => ctx.revert();
}
