import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import { GoogleFont } from 'react-typography';
import CodePlugin from 'typography-plugin-code';
/*eslint-disable*/
const options = {
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '400',
        '500',
        '700',
      ],
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  includeNormalize: true,
  scale: 2.25,
  plugins: [
    new CodePlugin(),
  ]
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}
/*eslint-enable*/
export default typography;

