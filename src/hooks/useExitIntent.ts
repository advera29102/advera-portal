import { useEffect, useState } from 'react';

interface UseExitIntentOptions {
  threshold?: number;
  onExitIntent?: () => void;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const { threshold = 20, onExitIntent } = options;
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;

      // Desktop: Mouse leaving from top of viewport
      if (e.clientY <= threshold) {
        setHasTriggered(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        onExitIntent?.();
      }
    };

    let lastScrollTop = 0;
    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Mobile: Scroll up detection (scroll threshold)
      if (scrollTop < lastScrollTop && scrollTop > 300) {
        setHasTriggered(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        onExitIntent?.();
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    // Desktop detection
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile detection
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered, threshold, onExitIntent]);

  return { hasTriggered };
};
