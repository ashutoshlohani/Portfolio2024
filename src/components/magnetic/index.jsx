'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from './class-name';
import { MagneticItem } from './index.styled';
import { magneticVariance } from './index.variance';
import { useMagnetic } from './use-magnetic';

/** @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outline'; size: 'default' | 'md' | 'lg' | 'xl';}} */
// eslint-disable-next-line react/prop-types
export function MagneticButton({ children, className, variant, size, ...props }) {
   /** @type {import('react').MutableRefObject<HTMLButtonElement>} */
   const elementRef = useRef(null);
   const {
      position: { x, y },
      handleMagneticMove,
      handleMagneticOut,
   } = useMagnetic(elementRef);

   return (
      <motion.button
         ref={elementRef}
         className={cn(magneticVariance({ variant, size, className }))}
         animate={{ x, y }}
         transition={{
            type: 'spring',
            damping: 15,
            stiffness: 150,
            mass: 0.1,
         }}
         onPointerMove={handleMagneticMove}
         onPointerOut={handleMagneticOut}
         whileHover={{ scale: 1.1 }}
         {...props}>
         <MagneticItem>{children}</MagneticItem>
      </motion.button>
   );
}
