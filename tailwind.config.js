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
        // You can customize your color palette here
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#ea580c', // orange-600
              '&:hover': {
                color: '#c2410c', // orange-700
              },
            },
          },
        },
        dark: {
          css: {
            color: '#f3f4f6', // gray-100
            a: {
              color: '#fb923c', // orange-400
              '&:hover': {
                color: '#f97316', // orange-500
              },
            },
            h1: {
              color: '#f9fafb', // gray-50
            },
            h2: {
              color: '#f9fafb', // gray-50
            },
            h3: {
              color: '#f9fafb', // gray-50
            },
            h4: {
              color: '#f9fafb', // gray-50
            },
            strong: {
              color: '#f9fafb', // gray-50
            },
            code: {
              color: '#f9fafb', // gray-50
            },
            blockquote: {
              color: '#e5e7eb', // gray-200
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