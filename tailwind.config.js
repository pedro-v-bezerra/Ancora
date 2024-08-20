/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-header": "linear-gradient(to bottom, rgba(1, 17, 43, 1) 0%, rgba(1, 17, 43, 0.84) 100%)" ,
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'robotocondensed': ['Roboto Condensed', 'sans-serif'],
        'dm': ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'apresentation': ['3.5rem', {
          lineHeight: '4.5rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
