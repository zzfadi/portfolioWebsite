/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode using class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b', // surface-800
            a: {
              color: '#0d9488', // primary-600
              '&:hover': {
                color: '#0f766e', // primary-700
              },
            },
            h1: {
              color: '#115e59', // primary-800
            },
            h2: {
              color: '#115e59', // primary-800
            },
            h3: {
              color: '#115e59', // primary-800
            },
            h4: {
              color: '#115e59', // primary-800
            },
          },
        },
        dark: {
          css: {
            color: '#f1f5f9', // surface-100
            a: {
              color: '#5eead4', // primary-300
              '&:hover': {
                color: '#2dd4bf', // primary-400
              },
            },
            h1: {
              color: '#f8fafc', // surface-50
            },
            h2: {
              color: '#f8fafc', // surface-50
            },
            h3: {
              color: '#f8fafc', // surface-50
            },
            h4: {
              color: '#f8fafc', // surface-50
            },
            strong: {
              color: '#f8fafc', // surface-50
            },
            code: {
              color: '#f8fafc', // surface-50
            },
            blockquote: {
              color: '#e2e8f0', // surface-200
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 