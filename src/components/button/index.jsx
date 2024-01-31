import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMagnetic } from '../../hooks/use-magnetic';
import { magneticVariance } from './variance';

// eslint-disable-next-line react/prop-types
export function MagneticButton({ children, className, variant, size, ...props }) {
   const elementRef = useRef(null);
   const {
      position: { x, y },
      handleMagneticMove,
      handleMagneticOut,
   } = useMagnetic(elementRef);

   const magneticItemStyle = {
      position: 'relative',
      zIndex: 1,
      display: 'block',
      width: 'max-content',
      wordBreak: 'break-all',
   };

   return (
      <motion.button
         ref={elementRef}
         className={twMerge(clsx(magneticVariance({ variant, size, className })))}
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
         <p style={magneticItemStyle}>{children}</p>
      </motion.button>
   );
}
