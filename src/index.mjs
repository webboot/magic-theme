export * as Logo from './Logo.mjs'

export const state = {
  hero: {
    title: ['@web', 'boot'],
    description: 'trust on every step',

    content: ['automagically verify the integrity of homepages,', 'before you load them.'],

    menu: [
      { to: '/#installation', text: 'installation' },
      { to: '/#usage', text: 'usage' },
      { to: '/#theme-vars', text: 'theme vars' },
    ],
  },

  footer: {
    one: {
      title: '@webboot',
      before: ['trust on every step.', 'created by the @webboot dao.'],
      menu: [{ to: '/privacy/', text: 'privacy notice' }],
    },
    two: {
      title: 'sitemap',
      menu: [
        { to: '/', text: 'index' },
        { to: '/tofu/', text: 'tofu' },
        { to: '/tosu/', text: 'tosu' },
        { to: '/getting-started/', text: 'getting-started' },
        { to: '/privacy/', text: 'privacy' },
        { to: '/canary/', text: 'warrant canary' },
        { to: '/support/', text: 'support' },
      ],
    },
    three: {
      title: 'social links',
      menu: [
        { to: 'https://www.npmjs.com/org/webboot', text: 'npm' },
        { to: 'https://twitter.com/webbootorg', text: 'twitter' },
        { to: 'https://keybase.io/webboot', text: 'keybase' },
        { to: 'https://github.com/webboot', text: 'github' },
        { to: 'https://gitlab.com/webboot', text: 'gitlab' },
      ],
    },
  },
}

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
    tablet: '500px',
    laptop: '1024px',
    desktop: '1600px',
  },
}

export default vars => ({
  '.Logo': {
    svg: {
      width: '2.6em',
    },
  },
})
