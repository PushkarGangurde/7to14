'use client';

import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: 'first' | 'last' | 'center' | number;
  initialDelay?: number;
  auto?: boolean;
  rotationInterval?: number;
  animatePresenceMode?: 'sync' | 'popLayout' | 'wait';
  staggerDuration?: number;
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>((props, ref) => {
  const {
    texts,
    mainClassName = '',
    initialDelay = 0,
    auto = false,
    rotationInterval = 2000,
    animatePresenceMode = 'wait',
    staggerDuration = 0.05,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  }, [texts.length]);

  const previous = useCallback(() => {
    setCurrentTextIndex((prev) => (prev - 1 + texts.length) % texts.length);
  }, [texts.length]);

  const jumpTo = useCallback((index: number) => {
    setCurrentTextIndex(index);
  }, []);

  const reset = useCallback(() => {
    setCurrentTextIndex(0);
  }, []);

  useImperativeHandle(ref, () => ({
    next,
    previous,
    jumpTo,
    reset,
  }));

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(next, rotationInterval);
    return () => clearInterval(timer);
  }, [auto, next, rotationInterval]);

  return (
    <div className={`overflow-hidden ${mainClassName}`} {...rest}>
      <AnimatePresence mode={animatePresenceMode}>
        <motion.div
          key={currentTextIndex}
          className="flex flex-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {texts[currentTextIndex].split('').map((char, i) => (
            <motion.span
              key={`${currentTextIndex}-${i}`}
              variants={{
                initial: { y: '100%', opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: '-100%', opacity: 0 }
              }}
              transition={{
                duration: 0.5,
                delay: initialDelay + i * staggerDuration,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

RotatingText.displayName = 'RotatingText';

export default RotatingText;
