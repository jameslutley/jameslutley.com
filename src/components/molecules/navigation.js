import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { Flex } from 'grid-emotion'
import t from 'tachyons-js'

import NavItem from '../atoms/nav-item'

export default () =>
  <Flex is='nav' align='center' justify='center' flex='1 1 auto'>
    <NavItem linkTo="/projects">Projects</NavItem>
    <NavItem linkTo="/about">About</NavItem>
    <NavItem linkTo="/blog">Blog</NavItem>
    <NavItem linkTo="/contact">Contact</NavItem>
  </Flex>
