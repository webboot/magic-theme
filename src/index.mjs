export const vars = {
  neutral: '#5a5a5a',
  text: {
    dark: '#c4c4c4',
    light: '#212121',
  },
  link: {
    dark: '#c4c4c4',
    light: '#212121',
    hover: {
      dark: '#ea4444',
      light: '#ea4444',
    },
  },
  background: {
    backgroundDark: '#212121',
    backgroundLight: '#e0e0e0',
  },

  primary: {
    neutral: '#ea4444',
    light: '#ff7070',
    dark: '#c82222',
  },

  secondary: {
    neutral: '#55aa55',
    light: '70ff70',
    dark: '22c822',
  },

  white: '#ffffff',

  maxWidth: '1000px',

  fadeDuration: '500ms',

  widths: {
    tablet: 500,
    laptop: 1024,
    desktop: 1600,
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontFamily: [
        '"Ubuntu Narrow"',
        'Ubuntu',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ].join(', '),

      lineHeight: '2',
    },

    '#Magic': {
      backgroundColor: v.backgroundDark,
      color: v.darkText,
      transition: `color ${v.fadeDuration}, background-color ${v.fadeDuration}`,

      '&.light': {
        backgroundColor: v.backgroundLight,
        color: v.lightText,
      },
    },

    '.Page': {
      '> div': {
        padding: '5%',
        width: '100%',
        maxWidth: v.maxWidth,
        margin: '0 auto',

        '&#hero': {
          maxWidth: 'inherit',
        },
      },
    },

    'h1,h2,h3': { color: v.red },
    h1: { fontSize: '1.5em' },
    h2: { fontSize: '1.4em' },
    h3: { fontSize: '1.3em' },
    h4: { fontSize: '1.2em' },
    h5: { fontSize: '1.1em', padding: 0 },

    a: {
      color: v.linkColor,
      transition: `color ${v.fadeDuration}`,

      '&:hover': {
        color: v.linkColorHover,
      },

      '.light &&': {
        color: v.linkColorLight,

        '&:hover': {
          color: v.linkColorHoverLight,
        },
      },
    },

    i: {
      fontStyle: 'italic',
    },
    b: {
      fontWeight: 700,
    },

    'img, svg': {
      maxWidth: '100%',
      maxHeight: '100%',
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    '.Menu': {
      float: 'none',
    },

    '.LightSwitch': {
      position: 'fixed',
      bottom: '0.5em',
      right: '0.5em',
    },
    '.Gdpr': {
      left: 'auto',
      right: '0.5em',

      '.ShowHide': {
        left: 'auto',
        bottom: '3em',
        right: '0.5em',
      },
    },

    [`@media screen and (min-width: ${v.widths.tablet}px)`]: {
      '.Menu': {
        float: 'right',
        margin: 0,
      },
      '.Logo': {
        float: 'left',
      },
    },
  }
}
