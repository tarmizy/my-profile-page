import { motion, useReducedMotion } from 'framer-motion';

export function MotionReveal({ children, delay = 0, className = '', ...props }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, delay = 0, className = '', ...props }) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduced ? undefined : { y: -8, scale: 1.012, transition: { type: 'spring', stiffness: 320, damping: 24 } }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.article>
  );
}
