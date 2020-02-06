export default (vars = {}) => {
  const {
    colors,
    grey = '#5a5d62',
    darkText = '#c4c7cc',
    backgroundDark = '#212121',
    backgroundLight = '#E0E0E0',
    lightText = '#212121',
    red = '#ea4144',
    redLight = '#ff6e70',
    redDark = '#c82122',
    white = '#ffffff',

    linkColor = '#c4c7cc',
    linkColorLight = '#212121',

    linkColorHover = '#9E9E9E',
    linkColorHoverLight = '#9E9E9E',

    maxWidth = '1000px',

    fadeDuration = '500ms',
  } = vars

  const widths = {
    tablet: 500,
    laptop: 1024,
    desktop: 1600,
    ...vars.widths,
  }

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
      backgroundColor: backgroundDark,
      color: darkText,
      transition: `color ${fadeDuration}, background-color ${fadeDuration}`,

      '&.light': {
        backgroundColor: backgroundLight,
        color: lightText,
      },
    },

    '.Page': {
      '> div': {
        padding: '5%',
        width: '100%',
        maxWidth: maxWidth,
        margin: '0 auto',

        '&#hero': {
          maxWidth: 'inherit',
        },
      },
    },

    h1: { fontSize: '1.5em' },
    h2: { fontSize: '1.4em' },
    h3: { fontSize: '1.3em' },
    h4: { fontSize: '1.2em' },
    h5: { fontSize: '1.1em', padding: 0 },

    a: {
      color: linkColor,
      transition: `color ${fadeDuration}`,

      '&:hover': {
        color: linkColorHover,
      },

      '.light &&': {
        color: linkColorLight,

        '&:hover': {
          color: linkColorHoverLight,
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

    [`@media screen and (min-width: ${widths.tablet}px)`]: {
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
