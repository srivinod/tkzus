
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  threshold?: number; // 0-1, percentage of element visible before triggering
  direction?: "up" | "down" | "left" | "right" | "none";
}

const ScrollFadeIn = ({
  children,
  className,
  delay = 10,
  threshold = 0.01,
  direction = "up",
}: ScrollFadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Get animation class based on direction
  const getAnimationClass = () => {
    if (isVisible) return "opacity-100 translate-y-0 translate-x-0";
    
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10";
      case "down":
        return "opacity-0 -translate-y-10";
      case "left":
        return "opacity-0 translate-x-10";
      case "right":
        return "opacity-0 -translate-x-10";
      case "none":
        return "opacity-0";
      default:
        return "opacity-0 translate-y-10";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If delay is specified, wait before setting visible
          if (delay) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          // Once we've shown the element, we can stop observing it
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        getAnimationClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
