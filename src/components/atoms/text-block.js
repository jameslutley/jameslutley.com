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

  img {
    max-width: calc(100% + ${props => props.theme.spacingExtraExtraLarge});
    margin-left: -${props => props.theme.spacingLarge};
    margin-right: -${props => props.theme.spacingLarge};
  }

  figcaption {
    ${t.db};
    ${t.tc};
  }

  blockquote,
  li,
  p {
    *:last-child{
      margin-bottom: 0;
    }
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

  pre {
    margin-left: -${props => props.theme.spacingLarge};
    margin-right: -${props => props.theme.spacingLarge};
    padding: ${props => props.theme.spacingLarge};
    background: ${props => props.theme.washedBlue};
    font-family: ${props => props.theme.code};
    font-size: calc(17rem / 16);
    line-height: calc(24 / 17);
    box-shadow: inset 0 0 0 1px ${props => props.theme.lightestBlue};
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
    border-bottom: 1px solid ${props => props.theme.lightGray};
  }

  blockquote {
    margin: 0 0 ${props => props.theme.spacingMediumLarge};
    padding-left: ${props => props.theme.spacingMediumLarge};
    border-left: calc(6rem / 16) solid ${props => props.theme.nearWhite};
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
    background: ${props => props.theme.washedBlue};
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
