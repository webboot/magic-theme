export const vars = {
  background: {
    dark: '#212121',
    light: '#e0e0e0',
  },

  link: {
    dark: '#c4c4c4',
    light: '#212121',

    hover: {
      dark: '#ea4444',
      light: '#ea4444',
    },
  },

  neutral: '#5a5a5a',

  primary: {
    dark: '#c82222',
    light: '#ff7070',
    neutral: '#ea4444',
  },

  secondary: {
    dark: '#22c822',
    light: '#70ff70',
    neutral: '#44ea44',
  },

  text: {
    dark: '#c4c4c4',
    light: '#212121',
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
      backgroundColor: v.background.dark,
      color: v.text.dark,
      transition: `color ${v.fadeDuration}, background-color ${v.fadeDuration}`,

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
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

    'h1,h2,h3': { color: v.primary.neutral },
    h1: { fontSize: '1.5em' },
    h2: { fontSize: '1.4em' },
    h3: { fontSize: '1.3em' },
    h4: { fontSize: '1.2em' },
    h5: { fontSize: '1.1em', padding: 0 },

    a: {
      color: v.link.dark,
      transition: `color ${v.fadeDuration}`,

      '&:hover': {
        color: v.link.hover.dark,
      },

      '.light &&': {
        color: v.link.light,

        '&:hover': {
          color: v.link.hover.light,
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

    '.Header': {
      padding: '.5em 0 0',
      width: '100%',

      '> div': {
        margin: '0 auto',
        maxWidth: '1000px',
        padding: '0 5%',
      },
    },

    '.Menu': {
      lineHeight: 1,
      margin: '0.7em 0 0',
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
      },
      '.Logo': {
        float: 'left',
      },
    },
  }
}
