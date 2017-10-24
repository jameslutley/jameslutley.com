import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const CategoryText = styled.span`
  ${t.dib};
  padding-right: ${props => props.theme.spacingLarge};

  &:last-child {
    ${t.pr0};
  }
`

export default ({ children }) =>
  <CategoryText>
    {children}
  </CategoryText>

CategoryText.propTypes = {
  children: PropTypes.string.isRequired,
}
