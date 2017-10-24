import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import t from 'tachyons-js'

const NavItemLink = styled(Link)`
  ${t.link};
  ${t.dib};
  ${t.ttu};
  margin-left: ${props => props.theme.spacingSmallMedium};
  margin-right: ${props => props.theme.spacingSmallMedium};
  padding-top: ${props => props.theme.spacingSmall};
  padding-bottom: ${props => props.theme.spacingSmall};
  font-family: ${props => props.theme.code};
  font-size: ${props => props.theme.fontSize9};
  line-height: calc(24 / 14);
  letter-spacing: ${props => props.theme.tracked};
  color: ${props => props.theme.nearBlack};

  ${props => props.theme.Desktop} {
    margin-left: ${props => props.theme.spacingMediumLarge};
    margin-right: ${props => props.theme.spacingMediumLarge};
    font-size: ${props => props.theme.fontSize7};
    line-height: ${props => props.theme.lineHeightCopy};
  }
`

const NavItem = ({ linkTo, children }) =>
  <NavItemLink to={linkTo}>
    {children}
  </NavItemLink>

NavItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default NavItem
