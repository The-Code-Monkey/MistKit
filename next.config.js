/* eslint-disable */
const path = require('path');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  webpack: (config) => {
    // console.log(config.module.rules?.findIndex((rule) => rule?.oneOf?.find(one => `${one.issuer?.and}`.includes('_app'))));
    config.module.rules[6].oneOf?.forEach((one) => {
      if (!`${one.issuer?.and}`.includes('_app')) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
})
