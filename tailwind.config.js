/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            dark: '#202020',
            light: '#FFFCF2',
         },
      },
   },
   plugins: ['prettier-plugin-tailwindcss'],
};
