export const state = {
  title: '@webboot',
  description: 'solving the tofu problem, one boot at a time.',

  branding: ['@web', 'boot'],

  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#usage', text: 'usage' },
    { to: '/#theme-vars', text: 'theme vars' },
  ],

  vars: {
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
      tablet: '500px',
      laptop: '1024px',
      desktop: '1600px',
    },
  },
}
