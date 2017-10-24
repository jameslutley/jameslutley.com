import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import t from 'tachyons-js'

const ButtonLink = styled(Link)`
  ${t.ba};
  ${t.border_box};
  ${t.ttu};
  ${t.no_underline};
  padding: calc(${props => props.theme.spacingSmallMedium} - 1px) calc(${props => props.theme.spacingMedium} * 1.25);
  font-family: ${props => props.theme.code};
  font-size: ${props => props.theme.fontSize9};
  line-height: calc(24 / 14);
  letter-spacing: ${props => props.theme.tracked};
  color: ${props => props.theme.nearBlack};

  ${props => props.theme.Desktop} {
    padding: calc(${props => props.theme.spacingMedium} * 1.25 - 1px) calc(${props => props.theme.spacingMedium} * 2.5);
    font-size: ${props => props.theme.fontSize6};
    line-height: calc(24 / 18);
    transition: background-color 0.15s ease-in, border-color 0.15s ease-in, color 0.15s ease-in;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.nearBlack};
    border-color: ${props => props.theme.nearBlack};
    color: ${props => props.theme.white};
  }

`

const Button = ({ linkTo, children }) =>
  <ButtonLink to={linkTo}>
    {children}
  </ButtonLink>

Button.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Button
