import Typography from 'typography'

const theme = {
  baseFontSize: '16px',
  baseLineHeight: 1.625,
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  scaleRatio: 2,
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 600,
  bodyWeight: 'normal',
  boldWeight: 600,
  blockMarginBottom: 0.5,
  overrideStyles: ({ rhythm }) => ({
    h1: {
      borderBottom: '1px solid hsla(0,0%,0%,0.07)',
      paddingBottom: `calc(${rhythm(0.25)} - 1px)`,
      marginBottom: rhythm(1),
      marginTop: rhythm(1.5),
    },
    h2: {
      borderBottom: '1px solid hsla(0,0%,0%,0.07)',
      paddingBottom: `calc(${rhythm(0.25)} - 1px)`,
      marginBottom: rhythm(0.25),
      marginTop: rhythm(1),
    },
    h6: {
      color: 'hsla(0,0%,0%,0.53)',
    },
    'h3,h4,h5,h6': {
      marginBottom: rhythm(0.5),
      marginTop: rhythm(1),
    },
    'ol,ul': {
      marginLeft: rhythm(1.25),
    },
    // children ol, ul
    'li>ol,li>ul': {
      marginLeft: rhythm(1.25),
    },
    a: {
      color: '#4078c0',
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      textDecoration: 'underline',
    },
    blockquote: {
      borderLeft: '4px solid hsla(0,0%,0%,0.13)',
      color: 'hsla(0,0%,0%,0.53)',
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: `calc(${rhythm(0.5)} - 1px)`
    }
  })
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
