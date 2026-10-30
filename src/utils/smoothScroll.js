import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function initSmoothScroll() {
  // If reduced motion is requested, do not force smooth virtual scroll
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return {
      destroy: () => {},
      lenis: null,
    };
  }

  // Initialize Lenis
  lenisInstance = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential soft decay
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  });

  // Synchronize Lenis with GSAP ScrollTrigger (Official pattern)
  lenisInstance.on('scroll', ScrollTrigger.update);

  const tickerCallback = (time) => {
    lenisInstance.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis: lenisInstance,
    destroy: () => {
      gsap.ticker.remove(tickerCallback);
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    },
  };
}

export function scrollToTarget(target, offset = 0) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.4 });
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
