import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const MetaText = styled.div`
  ${t.ttu};
  font-family: ${props => props.theme.code};
  font-size: ${props => props.theme.fontSize9};
  line-height: calc(24 / 14);
  letter-spacing: ${props => props.theme.tracked};
  color: ${props => props.theme.gray};

  ${props => props.theme.Desktop} {
    font-size: ${props => props.theme.fontSize8};
    line-height: calc(24 / 15);
  }
`

export default ({ children }) =>
  <MetaText>
    {children}
  </MetaText>

MetaText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}
