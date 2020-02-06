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
}
