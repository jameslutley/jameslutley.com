import React from 'react'
import PropTypes from 'prop-types'
// import Headroom from 'react-headroom'
import styled from 'react-emotion'
import t from 'tachyons-js'

import Container from '../atoms/container'
import Logo from '../atoms/logo'
import Navigation from '../molecules/navigation'
import SocialIcons from '../molecules/social-icons'

const HeaderContainer = styled.header`
  ${t.bb};
  border-color: ${props => props.theme.lightGray};
`

const HeaderInner = styled.div`
  ${t.flex};
  ${t.flex_wrap};
`

const HeaderLeft = styled.div`
  ${t.w_auto};

  ${props => props.theme.Desktop} {
    ${t.w_25};
  }
`

const HeaderRight = styled.div`
  ${t.flex};
  ${t.flex_wrap};
  ${t.items_center};
  ${t.justify_end};
  margin-left: auto;

  ${props => props.theme.Desktop} {
    ${t.w_25};
    ${t.ml0};
  }
`

const Header = ({ siteTitle }) =>
  <HeaderContainer role='banner'>
    <Container>
      <HeaderInner>
        <HeaderLeft>
          <Logo siteTitle={siteTitle} />
        </HeaderLeft>
        <Navigation />
        <HeaderRight>
          <SocialIcons />
        </HeaderRight>
      </HeaderInner>
    </Container>
  </HeaderContainer>

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
