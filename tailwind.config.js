/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-bg-surface)',
          hover: 'var(--color-bg-hover)',
          accent: 'var(--color-accent)',
          'text-primary': 'var(--color-text-primary)',
          'text-muted': 'var(--color-text-muted)',
          border: 'var(--color-border)',
          heading: '#e6f1ff',
        },
        dark: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-bg-surface)',
          hover: 'var(--color-bg-hover)',
          accent: 'var(--color-accent)',
          accentSecondary: 'var(--color-accent)',
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-muted)',
          }
        }
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        'card-hover': '0 4px 24px rgba(2, 12, 27, 0.7)',
      },
    },
  },
  plugins: [],
}
