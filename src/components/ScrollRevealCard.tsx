import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'center';
}

const ScrollRevealCard = ({ 
  children, 
  className, 
  delay = 0,
  direction = 'center'
}: ScrollRevealCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkVisibility = () => {
      if (!element || hasTriggered) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when element center enters the bottom 20% of viewport
      const elementCenter = rect.top + rect.height / 2;
      const triggerPoint = windowHeight * 1.1;
      
      if (elementCenter <= triggerPoint) {
        // Delay the animation start
        setTimeout(() => {
          setIsVisible(true);
          setHasTriggered(true);
        }, delay);
      }
    };

    // Check on scroll
    const handleScroll = () => {
      requestAnimationFrame(checkVisibility);
    };

    // Initial check
    checkVisibility();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [delay, hasTriggered]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 80px, 0) scale(0.92)';
      case 'down':
        return 'translate3d(0, -80px, 0) scale(0.92)';
      case 'left':
        return 'translate3d(150px, 0, 0)';
      case 'right':
        return 'translate3d(-150px, 0, 0)';
      case 'scale':
        return 'scale(0.75)';
      case 'center':
      default:
        return 'scale(0.85) translateY(40px)';
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return 'translate3d(0, 0, 0)';
      default:
        return 'translate3d(0, 0, 0) scale(1)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealCard;
