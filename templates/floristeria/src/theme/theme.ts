const theme = {
  cssVariables: {
    'color-hero': 'radial-gradient(circle at top right, rgba(242, 201, 76, 0.18), transparent 45%), #101010',
    'color-background': '#101010',
    'color-background-light': '#f6f3ed',
    'color-text': '#1f1f1f',
    'color-text-light': '#f8f4ec',
    'color-text-muted': '#6c6256',
    'color-accent': '#f2c94c',
    'color-accent-dark': '#c79b18',
    'color-service-bg': 'linear-gradient(160deg, #1f1f1f, #2b2b2b)',
    'font-family': "'Playfair Display', 'Montserrat', sans-serif",
    'font-display': "'Playfair Display', serif"
  }
};

export type Theme = typeof theme;

export default theme;
