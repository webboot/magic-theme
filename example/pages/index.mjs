export const View = state =>
  div([
    h1('@webboot/magic-theme'),
    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-themes' }, '@magic-themes'),
      ' webboot theme. It is being used as the foundational theme for all @webboot pages.',
    ]),

    h3({ id: 'installation' }, 'installation'),
    Pre(`npm install --save --save-exact @webboot/magic-theme`),

    h2({ id: 'usage' }, 'usage'),

    h3({ id: 'usage-require' }, 'require in config.mjs:'),

    Pre(`
// config.mjs

export default {
  // ... other config
  THEME: '@webboot/magic-theme',
}`),
    p('magic will then find and merge the themes automatically, just as it did on this page'),

    h3({ id: 'colors' }, 'colors'),
    p('@webboot/magic-theme exports and uses the following default colors:'),
    ul(
      [
        ['grey                ', '#5a5a5a'],
        ['darkText            ', '#c4c4c4'],
        ['backgroundDark      ', '#212121'],
        ['backgroundLight     ', '#e0e0e0'],
        ['lightText           ', '#212121'],
        ['red                 ', '#ea4444'],
        ['redLight            ', '#ff7070'],
        ['redDark             ', '#c42222'],
        ['white               ', '#ffffff'],
        ['linkColor           ', '#c4c4c4'],
        ['linkColorLight      ', '#212121'],
        ['linkColorHover      ', '#ea4444'],
        ['linkColorHoverLight ', '#ea4444'],
      ].map(([name, color]) =>
        li([span(`${name}: `), span({ class: 'Bg', style: `background-color: ${color}` }, color)]),
      ),
    ),

    h4('max page width'),
    p('vars.maxWidth: ', '1000px'),

    h4('fade duration:'),
    p('vars.fadeDuration should be used for all css animations'),
    p(['fadeDuration: ', '500ms']),

    h4('widths'),
    p('the following width breakpoints exist:'),
    ul(
      [
        ['tablet', '500px'],
        ['laptop', '1024px'],
        ['desktop', '1600px'],
      ].map(([name, width]) => li([name, ': ', width])),
    ),
  ])

export const style = {
  ul: {
    display: 'inline-block',
    width: '240px',
  },
  li: {
    display: 'inline-block',
    width: '100%',
  },
  span: {
    float: 'left',
  },

  '.Bg': {
    border: '1px solid #ffffff',
    borderRadius: '0.3em',
    color: 'rebeccapurple',
    float: 'right',
    padding: '0.1em',
    textAlign: 'right',
    width: '75px',
  },
}
