import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import t from 'tachyons-js'

const LogoLink = styled(Link)`
  ${t.dib};
  ${t.link};
  ${t.fw7};
  padding-top: ${props => props.theme.spacingMediumLarge};
  padding-right: ${props => props.theme.spacingMedium};
  padding-bottom: calc(${props => props.theme.spacingMediumLarge} - 1px);
  font-family: ${props => props.theme.sansSerifDisplay};
  font-size: ${props => props.theme.fontSize6};
  line-height: calc(24 / 18);
  color: ${props => props.theme.nearBlack};

  ${props => props.theme.Desktop} {
    padding-top: ${props => props.theme.spacingLarge};
    padding-bottom: calc(${props => props.theme.spacingLarge} - 1px);
    font-size: ${props => props.theme.fontSize5};
    line-height: calc(24 / 20);
  }
`

const Logo = ({ siteTitle }) =>
  <LogoLink to="/">
    {siteTitle}
  </LogoLink>

Logo.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Logo
