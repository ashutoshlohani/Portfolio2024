import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const words = [
   'Hello', // English
   'やあ', // Yaa - Japanese
   'Olá', // Portuguese
   'Привет', // Privet - Russian
   'Hola', // Spanish
   'سلام', // Salaam - Persian (Arabic script)
   'Bonjour', // French
   'Ciao', // Italian
   '你好', // Nǐ hǎo - Mandarin Chinese
   'Chào bạn', // Vietnamese
   '안녕하세요', // Annyeonghaseyo - Korean
   'नमस्ते', // Hindi
];

function LoadingSuspence() {
   {
      const [index, setIndex] = useState(0);

      useEffect(() => {
         const timeoutId = setTimeout(() => {
            if (index === words.length - 1) {
               setIndex(0);
            } else {
               setIndex(index + 1);
            }
         }, 125);

         return () => clearTimeout(timeoutId);
      }, [index]);

      return (
         <div className={styles.introduction}>
            <p>{words[index]}</p>
         </div>
      );
   }
}

export default LoadingSuspence;
