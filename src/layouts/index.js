import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { normalize } from 'polished'
import t from 'tachyons-js'

import { theme } from '../utils/theme'
import Container from '../components/atoms/container'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'

injectGlobal`
  ${normalize()}

  html {
    ${t.overflow_y_scroll};
  }

  html,
  body,
  div,
  article,
  section,
  main,
  footer,
  header,
  form,
  fieldset,
  legend,
  pre,
  code,
  a,
  h1,h2,h3,h4,h5,h6,
  p,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  textarea,
  table,
  td,
  th,
  tr,
  input[type="email"],
  input[type="number"],
  input[type="password"],
  input[type="tel"],
  input[type="text"],
  input[type="url"] {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.serif};
    font-size: ${theme.fontSize6}
    line-height: ${theme.lineHeightCopy};
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    color: ${theme.darkGray};
  }

  img {
    ${t.mw_100};
    ${t.v_mid};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${theme.spacingMediumLarge};
    margin-bottom: ${theme.spacingMediumLarge};
    font-family: ${theme.sansSerifDisplay};
    text-rendering: optimizeLegibility;
    letter-spacing: -0.02rem;
    color: ${theme.nearBlack};

    ${theme.Desktop} {
      margin-top: ${theme.spacingExtraLarge};
      margin-bottom: ${theme.spacingMediumLarge};
    }
  }

  h1 {
    font-size: ${theme.fontSize2};
    line-height: calc(64 / 48);

    ${theme.Desktop} {
      font-size: ${theme.fontSize1};
      line-height: calc(80 / 64);
    }
  }

  h2 {
    font-size: ${theme.fontSize3};
    line-height: calc(48 / 30);
  }

  h3 {
    font-size: ${theme.fontSize4};
    line-height: calc(32 / 24);
  }

  h4 {
    font-size: ${theme.fontSize5};
    line-height: calc(24 / 20);
  }

  h5 {
    font-size: ${theme.fontSize6};
    line-height: calc(24 / 18);
  }

  h6 {
    font-size: ${theme.fontSize7};
    line-height: calc(24 / 16);
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: ${theme.lightBlue};
    text-decoration-skip: ink;
    transition: color 0.15s ease-in, text-decoration-color 0.15s ease-in;

    &:hover,
    &:focus {
      color: ${theme.nearBlack};
      text-decoration-color: ${theme.blue};
    }
  }
`

const DefaultLayout = ({ children, data }) =>
  <div>
    <Helmet
      title="James Lutley — Designer, Developer, Maker"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://use.typekit.net/uon4clj.css' }
      ]}
    />
    <ThemeProvider theme={theme}>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children()}
        <Footer avatar={data.file.childImageSharp.resolutions} siteTitle={data.site.siteMetadata.title} />
      </div>
    </ThemeProvider>
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "images/jameslutley.jpg"}) {
      childImageSharp {
        resolutions(width: 72, height: 72) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  },
`

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  data: PropTypes.object.isRequired,
}

export default DefaultLayout
