import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const TextBlockContainer = styled.section`
  font-family: ${props => props.theme.serif};
  font-size: ${props => props.theme.fontSizeCopy};
  line-height: calc(32 / 22);
  color: ${props => props.theme.darkGray};

  div {
    > h1:first-of-type,
    > h2:first-of-type {
      margin-top: 0;
    }

    > p:first-of-type {
      ${t.mt0};
      margin-bottom: ${props => props.theme.spacingExtraLarge};
      font-family: ${props => props.theme.serifDisplay};
      font-size: ${props => props.theme.fontSizeLead};
      line-height: calc(40 / 28);
      color: ${props => props.theme.nearBlack};
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
  table,
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
      padding-left: ${props => props.theme.spacingMediumLarge};
    }
  }

  figure {
    margin: ${props => props.theme.spacingExtraLarge} -${props => props.theme.spacingLarge};
  }

  img {
    max-width: calc(100% + ${props => props.theme.spacingExtraExtraLarge});
  }

  figcaption {
    ${t.db};
    ${t.tc};
    margin-top: ${props => props.theme.spacingSmall};
    font-family: ${props => props.theme.sansSerif};
    font-size: ${props => props.theme.fontSize7};
    line-height: ${props => props.theme.lineHeightCopy};
    color: ${props => props.theme.gray};
  }

  blockquote,
  li,
  p {
    *:last-child{
      margin-bottom: 0;
    }
  }

  small {
    font-size: ${props => props.theme.fontSize7};
    line-height: ${props => props.theme.lineHeightCopy};
  }

  abbr {
    border-bottom: 1px dotted ${props => props.theme.lightGray};
    cursor: help;
  }

  abbr[title] {
    border-bottom: 1px dotted ${props => props.theme.lightGray};
    cursor: help;
    text-decoration: none;
  }

  .gatsby-highlight {
    margin-left: -${props => props.theme.spacingLarge};
    margin-right: -${props => props.theme.spacingLarge};
    padding: ${props => props.theme.spacingLarge};
    background: ${props => props.theme.nearWhite};
    font-family: ${props => props.theme.code};
    font-size: calc(17rem / 16);
    line-height: calc(24 / 17);
    color: ${props => props.theme.darkGray};
    box-shadow: inset 0 0 0 1px ${props => props.theme.lightestGray};
    border-radius: calc(${props => props.theme.spacingExtraSmall} * 0.75);
    overflow: auto;
    position: relative;

    &::-webkit-scrollbar {
      width: ${props => props.theme.spacingSmall};
      height: ${props => props.theme.spacingSmall};
    }
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.lightGray};
      border-radius: 0 0 calc(${props => props.theme.spacingExtraSmall} * 0.75) calc(${props => props.theme.spacingExtraSmall} * 0.75);
    }
    &::-webkit-scrollbar-track {
      background: ${props => props.theme.lightestGray};
      border-radius: 0 0 calc(${props => props.theme.spacingExtraSmall} * 0.75) calc(${props => props.theme.spacingExtraSmall} * 0.75);
    }

    pre[class*='language-'] {
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      float: left;
      min-width: 100%;
      overflow: initial;
    }

    *::selection,
    * ::selection {
        background: ${props => props.theme.lightestGray};
      }
    }
  }

  .gatsby-highlight-code-line {
    background-color: ${props => props.theme.white};
    display: block;
    margin-right: -${props => props.theme.spacingMedium};
    margin-left: -${props => props.theme.spacingMedium};
    padding-right: -${props => props.theme.spacingMedium};
    padding-left: -${props => props.theme.spacingMedium};
    border-radius: calc(${props => props.theme.spacingExtraSmall} * 0.75);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    text-align: left;
    font-family: ${props => props.theme.sansSerifDisplay};
    color: ${props => props.theme.nearBlack};
  }

  th,
  td {
    padding-top: ${props => props.theme.spacingExtraSmall};
    padding-right: ${props => props.theme.spacingMedium};
    padding-bottom: calc(${props => props.theme.spacingMedium} - 1px);
    text-align: left;
    font-feature-settings: 'tnum';
    border-bottom: 1px solid ${props => props.theme.lightestGray};
  }

  blockquote {
    margin: 0 0 ${props => props.theme.spacingMediumLarge} calc(-${props => props.theme.spacingMediumLarge} * 1.25);
    padding-left: ${props => props.theme.spacingMediumLarge};
    border-left: calc(6rem / 16) solid ${props => props.theme.lightestGray};
  }

  cite {
    ${t.fs_normal};
    font-family: ${props => props.theme.sansSerif};
    font-size: ${props => props.theme.fontSize7};
    line-height: ${props => props.theme.lineHeightCopy};
    color: ${props => props.theme.gray};
  }

  hr {
    height: 1px;
    margin-top: ${props => props.theme.spacingExtraLarge};
    margin-bottom: calc(${props => props.theme.spacingExtraLarge} - 1px);
    background: ${props => props.theme.lightGray};
    border: 0;
  }

  tt,
  code,
  kbd,
  samp {
    font-family: ${props => props.theme.code};
    font-size: calc(17rem / 16);
    line-height: calc(24 / 17);
    color: ${props => props.theme.darkGray};
  }

  tt,
  code {
    padding-left: ${props => props.theme.spacingExtraSmall};
    padding-right: ${props => props.theme.spacingExtraSmall};
    background: ${props => props.theme.nearWhite};
    border-radius: calc(${props => props.theme.spacingExtraSmall} * 0.75);
  }

  pre code {
    background: none;
    padding-left: 0;
    padding-right: 0;
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
