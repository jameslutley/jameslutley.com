import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const TextBlockContainer = styled.section`
  font-family: ${props => props.theme.serif};
  font-size: ${props => props.theme.fontSizeCopy};
  line-height: calc(32 / 22);
  color: ${props => props.theme.darkGray};

  p:first-child {
    ${t.mt0};
    margin-bottom: ${props => props.theme.spacingExtraLarge};
    font-family: ${props => props.theme.serifDisplay};
    font-size: ${props => props.theme.fontSizeLead};
    line-height: calc(40 / 28);
    color: ${props => props.theme.nearBlack};
  }

  a {
    ${t.link};
    ${t.bb};
    border-color: transparent;
    color: ${props => props.theme.darkBlue};
    transition: color 0.15s ease-in, border-color 0.15s ease-in;

    &:hover,
    &:focus {
      color: ${props => props.theme.darkBlue};
      border-color: ${props => props.theme.blue};
    }
  }

  ul,
  ol,
  dl,
  dd,
  p,
  figure,
  pre,
  fieldset,
  blockquote,
  form,
  noscript,
  iframe,
  address {
    margin-top: 0;
    margin-bottom: ${props => props.theme.spacingMediumLarge};
    padding: 0;
  }


  li {
    margin-bottom: ${props => props.theme.spacingSmall};
    > p {
      margin-bottom: ${props => props.theme.spacingSmall};
    }
  }

  ul,
  ol {
    li {
      padding-left: 0;
    }
  }

  li > {
    ul,
    ol {
      margin-top: ${props => props.theme.spacingSmall};
      margin-bottom: ${props => props.theme.spacingSmall};
    }
  }

  blockquote,
  li,
  p {
    *:last-child{
      margin-bottom: 0;
    }
  }

  abbr {
    border-bottom: 1px dotted hsla(0,0%,0%,0.5);
    cursor: help;
  }

  abbr[title] {
    border-bottom: 1px dotted hsla(0,0%,0%,0.5);
    cursor: help;
    text-decoration: none;
  }

  pre {
    padding: ${props => props.theme.spacingMediumLarge};
    background: hsla(0,0%,0%,0.04);
    font-family: ${props => props.theme.code};
    font-size: ${props => props.theme.fontSize6};
    line-height: calc(24 / 18);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  blockquote {
    margin: 0 0 ${props => props.theme.spacingMediumLarge};
    padding-left: ${props => props.theme.spacingMediumLarge};
    border-left: calc(3rem / 16) solid ${props => props.theme.nearWhite};
  }

  hr {
    height: 1px;
    margin-bottom: calc(${props => props.theme.spacingMediumLarge} - 1px);
    background:hsla(0,0%,0%,0.2);
  }

  code,
  kbd,
  samp {
    font-family: ${props => props.theme.code};
    font-size: ${props => props.theme.fontSize6};
    line-height: calc(24 / 18);
  }
`

const TextBlock = ({ children }) =>
  <TextBlockContainer>
    {children}
  </TextBlockContainer>

TextBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default TextBlock
