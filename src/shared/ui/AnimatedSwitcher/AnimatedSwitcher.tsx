import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedSwitcherProps {
  children: React.ReactNode;
  switcher: string | undefined;
  className?: string;
}

export const AnimatedSwitcher = (props: AnimatedSwitcherProps) => {
  const { children, switcher, className } = props;

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={switcher}
        className={className}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            scale: {
              type: 'spring',
              stiffness: 300,
              damping: 15,
              delay: 0,
            },
          },
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -10, 10, -5, 5, 0],
          transition: { duration: 0.5 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
