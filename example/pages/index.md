<Hero state></Hero>

<div>

# @webboot/magic-theme

this is the [@magic-themes](https://github.com/magic-themes) webboot theme.
It is being used as the foundational theme for all @webboot pages.

currently, this theme is being used on the following pages:

* [webboot.org](https://webboot.org)
* [explain.webboot.org](https://explain.webboot.org)

### installation

`npm install --save --save-exact @webboot/magic-theme`

usually, webboot pages also use the [project theme](https://github.com/magic-themes/project)

## usage

### #usage require

in /config.mjs:

```
// /config.mjs

export default {
  // ... other config
  THEME: ['project', '@webboot/magic-theme'],
}
```

<ThemeVars state></ThemeVars>

</div>
