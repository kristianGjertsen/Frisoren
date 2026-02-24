export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['"Playfair Display"', 'serif'],
      },
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-warm': 'var(--color-surface-warm)',
        'surface-soft': 'var(--color-surface-soft)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        'border-soft': 'var(--color-border-soft)',
        'border-ink': 'var(--color-border-ink)',
        button: 'var(--color-button)',
        'button-text': 'var(--color-button-text)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-soft': 'var(--color-accent-soft)',
        sage: 'var(--color-sage)',
        clay: 'var(--color-clay)',
      },
      boxShadow: {
        elevated: 'var(--shadow-elevated)',
      },
      backgroundImage: {
        page:
          'radial-gradient(circle at 10% 0%, var(--color-accent-haze), transparent 55%), radial-gradient(circle at 90% 10%, var(--color-ink-haze), transparent 40%)',
        hero: 'linear-gradient(120deg, var(--color-hero-start) 0%, var(--color-hero-end) 100%)',
        'hero-image':
          'radial-gradient(circle at 30% 30%, var(--color-hero-glow), var(--color-hero-shadow))',
      },
    },
  },
  plugins: [],
}
