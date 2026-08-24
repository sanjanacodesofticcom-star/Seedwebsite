/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B1220',
          800: '#101B33',
          600: '#4A5468',
          400: '#8891A3',
        },
        brand: {
          ig: '#962FBF',
          'ig-warm': '#F0554D',
          fb: '#1877F2',
          wa: '#25D366',
          focus: '#2A3FE0',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          tint: '#F6F7FB',
        },
        line: {
          DEFAULT: '#E7E9F0',
          dark: '#1E293B',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
