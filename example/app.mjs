export const state = {
  logotext: '@webboot/theme',
  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-require', text: 'require' },
        { to: '-customize', text: 'customize' },
      ],
    },
  ],
  vars: {
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
}
