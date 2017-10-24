import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import t from 'tachyons-js'

import NavItem from '../atoms/nav-item'

const Nav = styled.nav`
  ${t.dn};

  ${props => props.theme.Tablet} {
    ${t.flex};
    ${t.flex_wrap};
    ${t.flex_auto};
    ${t.items_center};
    ${t.justify_center};
  }
`

export default () =>
  <Nav role="navigation">
    <NavItem linkTo="/projects">Projects</NavItem>
    <NavItem linkTo="/about">About</NavItem>
    <NavItem linkTo="/blog">Blog</NavItem>
    <NavItem linkTo="/contact">Contact</NavItem>
  </Nav>
