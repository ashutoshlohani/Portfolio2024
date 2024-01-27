import { useEffect, useState } from 'react';
import './Loader.css';

function Loader() {
   const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentGreetingIndex(prevIndex =>
            prevIndex < greetingWords.length - 1 ? prevIndex + 1 : 0
         );
      }, 100);

      return () => {
         clearInterval(intervalId);
      };
   }, []);

   return (
      <div className={`loader-container`}>
         <p className='greeting'>{greetingWords[currentGreetingIndex]}</p>
      </div>
   );
}

const greetingWords = [
   'Hello', // English
   'नमस्ते', // Hindi
   'Olá', // Portuguese
   'سلام', // Salaam - Persian (Arabic script)
   'Hola', // Spanish
   'やあ', // Yaa - Japanese
   'Привет', // Privet - Russian
   'Bonjour', // French
   'Ciao', // Italian
   '你好', // Nǐ hǎo - Mandarin Chinese
   'Chào bạn', // Vietnamese
   'Hallå', // Swedish
   '안녕하세요', // Annyeonghaseyo - Korean
   'ہیلو', // Hello - Urdu
];

export default Loader;
