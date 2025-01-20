"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function SlightFlip({
  word = "", // Default to an empty string to prevent errors
  duration = 1,
  delayMultiple = 0.01,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}) {
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const ref = useRef(null); // Reference to the component

  // Intersection observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when the component enters the viewport
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current); // Observe the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up on component unmount
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {/* Only animate if visible */}
      <AnimatePresence>
        {isVisible &&
          word.split("").map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("origin-center drop-shadow-sm", className)}
            >
              {char}
            </motion.span>
          ))}
      </AnimatePresence>
    </div>
  );
}
