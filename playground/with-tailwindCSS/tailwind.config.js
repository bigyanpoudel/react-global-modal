module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      sans: "'Helvetica'",
    },
    extend: {
      borderColor: {
        color: {
          100: withOpacityValue('--border-color-100'),
        },
      },
      boxShadow: {
        100: '0 0 20px 0 rgb(0,0,0,0.04)',
        200: '0 2px 4px 1px rgb(0,0,0,0.15)',
        300: '4px -1px 8px -4px rgba(0,0,0,0.15)',
        400: '-4px -1px 8px -4px rgba(0,0,0,0.15)',
      },
      colors: {
        disabled: {
          100: withOpacityValue('--disabled-color-100'),
        },
        'primary-bg': 'rgba(var(--primary-bg))',
        matrix: {
          100: withOpacityValue('--matrix-100'),
          200: withOpacityValue('--matrix-200'),
          300: withOpacityValue('--matrix-300'),
        },
      },
      textColor: {
        color: {
          100: withOpacityValue('--text-color-100'),
          200: withOpacityValue('--text-color-200'),
          300: withOpacityValue('--text-color-300'),
        },
        base: {
          secondary: withOpacityValue('--text-base-secondary'),
        },
      },
      transitionProperty: {
        width: 'width',
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}
