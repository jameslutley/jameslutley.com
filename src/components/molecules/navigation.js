import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import NavItem from '../atoms/nav-item'

export default () =>
  <nav role='navigation'>
    <NavItem linkTo='/projects'>Projects</NavItem>
    <NavItem linkTo='/about'>About</NavItem>
    <NavItem linkTo='/blog'>Blog</NavItem>
    <NavItem linkTo='/contact'>Contact</NavItem>
  </nav>
