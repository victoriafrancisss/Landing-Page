'use client';

import { useEffect, useRef, useState } from 'react';

// Smooth scroll component
export function SmoothScroll({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`scroll-smooth ${className}`}>
      {children}
    </div>
  );
}

// Fade in on scroll component
export function FadeInOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
        transition: 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: isVisible ? 'auto' : 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        contain: 'layout style paint'
      }}
    >
      {children}
    </div>
  );
}

// Animated counter component
export function AnimatedCounter({ 
  end, 
  duration = 2000,
  prefix = '',
  suffix = ''
}: { 
  end: number; 
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const start = 0;

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(start + (end - start) * easeOutQuart));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// Button with loading state
export function InteractiveButton({ 
  children, 
  href, 
  className = '',
  onClick
}: { 
  children: React.ReactNode; 
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (onClick) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1000);
      onClick();
    }
  };

  const baseClasses = "relative overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95";
  const content = (
    <>
      <span className={`relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        {children}
      </span>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </button>
  );
}
