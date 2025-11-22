module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b6b4f',
        secondary: '#f59e0b',
        accent: '#8b5cf6',
        neutralDark: '#0f172a',
        neutralLight: '#f8fafc'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px'
        }
      },
      fontSize: {
        'display-lg': ['3.2rem', { lineHeight: '1.04', fontWeight: '800' }],
        'display-md': ['2.5rem', { lineHeight: '1.08', fontWeight: '800' }]
      },
      spacing: {
        '7.5': '1.875rem',
        '18': '4.5rem'
      }
    }
  },
  plugins: []
}
