import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const TextBlockContainer = styled.section`
  font-family: ${props => props.theme.serif};
  font-size: ${props => props.theme.fontSizeCopy};
  line-height: calc(32 / 21);
  color: ${props => props.theme.darkGray};

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${props => props.theme.spacingExtraLarge};
    margin-bottom: ${props => props.theme.spacingMediumLarge};
    color: ${props => props.theme.nearBlack};
  }

  p {
    margin-top: ${props => props.theme.spacingMediumLarge};
    margin-bottom: ${props => props.theme.spacingMediumLarge};
  }

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
  ol {
    margin-top: ${props => props.theme.spacingMediumLarge};
    margin-bottom: ${props => props.theme.spacingMediumLarge};
    padding-left: 0;
    li {
      margin-bottom: ${props => props.theme.spacingSmall};
    }
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
