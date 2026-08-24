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
          lime: '#ABEF06',
          ig: '#962FBF',
          'ig-warm': '#F0554D',
          fb: '#1877F2',
          wa: '#25D366',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          tint: '#F8FAFC',
        },
        line: {
          DEFAULT: '#E2E8F0',
          dark: '#1E293B',
        }
      },
      fontFamily: {
        heading: ["'Segoe UI'", "-apple-system", "BlinkMacSystemFont", "Roboto", "sans-serif"],
        display: ["'Segoe UI'", "-apple-system", "BlinkMacSystemFont", "Roboto", "sans-serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'Segoe UI'", "'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
