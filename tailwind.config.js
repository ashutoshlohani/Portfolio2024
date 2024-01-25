/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            dark: '#1C1E21',
            light: '#FFFCF2',
            border: 'hsl(192 3% 90%)',
            input: 'hsl(192 3% 90%)',
            ring: 'hsl(232 79% 59%)',
            background: 'hsl(0 0% 100%)',
            foreground: 'hsl(225 7% 12%)',
            primary: {
               DEFAULT: 'hsl(232 79% 59%)',
               foreground: 'hsl(231 65% 51%)',
            },
            secondary: {
               DEFAULT: 'hsl(210 5% 86%)',
               foreground: 'hsl(192 3% 61%)',
            },
            destructive: {
               DEFAULT: 'hsl(0 84% 60%)',
               foreground: 'hsl(0 0% 98%)',
            },
            muted: {
               DEFAULT: 'hsl(210 5% 96%)',
               foreground: 'hsl(240 4% 46%)',
            },
            accent: {
               DEFAULT: 'hsl(210 5% 96%)',
               foreground: 'hsl(192 3% 61%)',
            },
            popover: {
               DEFAULT: 'hsl(0 0% 100%)',
               foreground: 'hsl(225 7% 12%)',
            },
            card: {
               DEFAULT: 'hsl(0 0% 100%)',
               foreground: 'hsl(225 7% 12%)',
            },
         },
         borderRadius: {
            lg: '0.5rem',
            md: 'calc(0.5rem - 2px)',
            sm: 'calc(0.5rem - 4px)',
         },
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: 0 },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
         transitionDuration: {
            1500: '1500ms',
            2000: '2000ms',
            2500: '2500ms',
            3000: '3000ms',
         },
         transitionTimingFunction: {
            'in-expo': 'cubic-bezier(0.1, 0, 0.3, 1)',
         },
      },
   },
};
