import { is } from '@magic/test'
import theme from '../src/index.mjs'

import css from '@magic/css'

export default [
  { fn: () => theme, expect: is.function, info: 'theme is a function' },
  { fn: () => css(theme), expect: is.object, info: 'theme can be parsed by css lib' },
  { fn: () => css.stringify(theme), expect: is.string, info: 'theme can be parsed by css lib' },
  {
    fn: () => css.stringify(theme),
    expect: t => t.includes('.Menu'),
    info: 'theme contains at least a .Menu style',
  },
]
