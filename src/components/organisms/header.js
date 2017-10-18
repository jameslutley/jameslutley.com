import React from 'react'
import PropTypes from 'prop-types'
// import Headroom from 'react-headroom'
import styled from 'react-emotion'
import { Flex, Box } from 'grid-emotion'
import t from 'tachyons-js'

import Container from '../atoms/container'
import Logo from '../atoms/logo'
import Navigation from '../molecules/navigation'
import SocialIcons from '../molecules/social-icons'

const HeaderContainer = styled.header`
  ${t.bb};
  border-color: ${props => props.theme.lightGray};
`

const Header = ({ siteTitle }) =>
  <HeaderContainer>
    <Container>
      <Flex>
        <Box width={1/4}>
          <Logo siteTitle={siteTitle} />
        </Box>
        <Navigation />
        <Flex width={1/4} wrap align='center' justify='flex-end'>
          <SocialIcons />
        </Flex>
      </Flex>
    </Container>
  </HeaderContainer>

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
