import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const TextBlockContainer = styled.section`
  font-family: ${props => props.theme.serif};
  font-size: ${props => props.theme.fontSize6};
  line-height: calc(28 / 18);
  color: ${props => props.theme.darkGray};

  ${props => props.theme.Tablet} {
    font-size: ${props => props.theme.fontSize5};
    line-height: calc(32 / 20);
  }

  ${props => props.theme.Hd} {
    font-size: ${props => props.theme.fontSizeCopy};
    line-height: calc(32 / 22);
  }

  div {
    > h1:first-of-type,
    > h2:first-of-type {
      ${t.mt0};
    }

    > p:first-of-type {
      ${t.mt0};
      margin-bottom: ${props => props.theme.spacingMediumLarge};
      font-family: ${props => props.theme.serifDisplay};
      font-size: ${props => props.theme.fontSizeCopy};
      line-height: calc(32 / 22);
      color: ${props => props.theme.nearBlack};

      ${props => props.theme.Tablet} {
        margin-bottom: ${props => props.theme.spacingExtraLarge};
        font-size: ${props => props.theme.fontSize4};
        line-height: calc(36 / 24);
      }

      ${props => props.theme.VHd} {
        font-size: ${props => props.theme.fontSizeLead};
        line-height: calc(40 / 28);
      }
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
    ${t.mt0};
    ${t.pa0};
    margin-bottom: ${props => props.theme.spacingMediumLarge};
  }

  ul,
  ol {
    padding-left: ${props => props.theme.fontSize6};

    ${props => props.theme.Desktop} {
      padding-left: ${props => props.theme.fontSizeCopy};
    }

    li {
      ${t.pl0};
    }
  }

  li {
    margin-bottom: ${props => props.theme.spacingSmall};
    > p {
      margin-bottom: ${props => props.theme.spacingSmall};
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

  .gatsby-resp-image-wrapper {
    margin-top: ${props => props.theme.spacingExtraLarge};
    margin-left: -${props => props.theme.spacingMedium} !important;
    margin-right: -${props => props.theme.spacingMedium} !important;

    ${props => props.theme.Phablet} {
      margin-left: -${props => props.theme.spacingLarge} !important;
      margin-right: -${props => props.theme.spacingLarge} !important;
    }
  }

  .gatsby-resp-image-background-image,
  .gatsby-resp-image-image {
    max-width: calc(100% + ${props => props.theme.spacingMedium});

    ${props => props.theme.Phablet} {
      max-width: calc(100% + ${props => props.theme.spacingLarge});
    }
  }

  p .gatsby-resp-image-wrapper + em {
    ${t.db};
    ${t.tc};
    ${t.fs_normal};
    margin-top: ${props => props.theme.spacingSmall};
    margin-bottom: ${props => props.theme.spacingExtraLarge};
    font-family: ${props => props.theme.sansSerif};
    font-size: ${props => props.theme.fontSize7};
    line-height: ${props => props.theme.lineHeightCopy};
    color: ${props => props.theme.gray};
  }

  blockquote,
  li,
  p {
    *:last-child{
      ${t.mb0};
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
    ${t.no_underline};
  }

  .gatsby-highlight {
    ${t.overflow_auto};
    ${t.relative};
    padding: ${props => props.theme.spacingLarge};
    background: ${props => props.theme.nearWhite};
    font-family: ${props => props.theme.code};
    font-size: ${props => props.theme.fontSize9};
    line-height: calc(20 / 14);
    color: ${props => props.theme.darkGray};
    box-shadow: inset 0 0 0 1px ${props => props.theme.lightestGray};
    border-radius: calc(${props => props.theme.spacingExtraSmall} * 0.75);

    ${props => props.theme.Tablet} {
      font-size: ${props => props.theme.fontSize7};
      line-height: ${props => props.theme.lineHeightCopy};
    }

    ${props => props.theme.Hd} {
      margin-left: -${props => props.theme.spacingLarge};
      margin-right: -${props => props.theme.spacingLarge};
    }

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
      ${t.mv0};
      ${t.pa0};
      ${t.bn};
      ${t.fl};
      ${t.bg_transparent};
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
    ${t.db};
    background-color: ${props => props.theme.white};
    margin-right: -${props => props.theme.spacingMedium};
    margin-left: -${props => props.theme.spacingMedium};
    padding-right: -${props => props.theme.spacingMedium};
    padding-left: -${props => props.theme.spacingMedium};
    border-radius: calc(${props => props.theme.spacingExtraSmall} * 0.75);
  }

  table {
    ${t.w_100};
    ${t.collapse};
  }

  thead {
    ${t.tl};
    font-family: ${props => props.theme.sansSerifDisplay};
    color: ${props => props.theme.nearBlack};
  }

  th,
  td {
    ${t.tl};
    ${t.bb};
    padding-top: ${props => props.theme.spacingExtraSmall};
    padding-right: ${props => props.theme.spacingMedium};
    padding-bottom: calc(${props => props.theme.spacingMedium} - 1px);
    font-feature-settings: 'tnum';
    border-color: ${props => props.theme.lightestGray};
  }

  blockquote {
    ${t.mh0};
    padding-left: ${props => props.theme.spacingMedium};
    border-left: calc(6rem / 16) solid ${props => props.theme.lightestGray};

    ${props => props.theme.Tablet} {
      margin: 0 0 ${props => props.theme.spacingMediumLarge} calc(-${props => props.theme.spacingMediumLarge} * 1.25);
      padding-left: ${props => props.theme.spacingMediumLarge};
    }
  }

  cite {
    ${t.fs_normal};
    font-family: ${props => props.theme.sansSerif};
    font-size: ${props => props.theme.fontSize7};
    line-height: ${props => props.theme.lineHeightCopy};
    color: ${props => props.theme.gray};
  }

  hr {
    ${t.bn};
    height: 1px;
    margin-top: ${props => props.theme.spacingLarge};
    margin-bottom: calc(${props => props.theme.spacingLarge} - 1px);
    background: ${props => props.theme.lightGray};

    ${props => props.theme.Desktop} {
      margin-top: ${props => props.theme.spacingExtraLarge};
      margin-bottom: calc(${props => props.theme.spacingExtraLarge} - 1px);
    }
  }

  tt,
  code,
  kbd,
  samp {
    font-family: ${props => props.theme.code};
    font-size: ${props => props.theme.fontSize9};
    line-height: calc(20 / 14);
    color: ${props => props.theme.darkGray};

    ${props => props.theme.Tablet} {
      font-size: ${props => props.theme.fontSize7};
      line-height: ${props => props.theme.lineHeightCopy};
    }
  }

  tt,
  code {
    padding-left: ${props => props.theme.spacingExtraSmall};
    padding-right: ${props => props.theme.spacingExtraSmall};
    background: ${props => props.theme.nearWhite};
    border-radius: calc(${props => props.theme.spacingExtraSmall} * 0.75);
  }

  pre code {
    ${t.ph0};
    ${t.bg_transparent};
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
