import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import { Flex, Box } from 'grid-emotion'
import t from 'tachyons-js'

import { theme } from '../../utils/theme'
import Container from '../atoms/container'
import Avatar from '../molecules/avatar'
import ContactDetails from '../molecules/contact-details'
import SocialIconsWithLabel from '../molecules/social-icons-with-label'

const FooterContainer = styled.footer`
  padding-top: calc(${props => props.theme.spacingExtraExtraLarge} - 1px);
  padding-bottom: ${props => props.theme.spacingExtraLarge};
  ${t.bt};
  border-color: ${props => props.theme.lightGray};
`

const Footer = ({ avatar, siteTitle }) =>
  <FooterContainer role='contentinfo'>
    <Container>
      <Flex mx={`-${theme.spacingMedium}`}>
        <Box width={1/4} px={theme.spacingMedium}>
          <Avatar avatar={avatar} siteTitle={siteTitle} />
        </Box>
        <Box width={1/4} px={theme.spacingMedium}>
          <ContactDetails />
        </Box>
        <Box width={1/2} px={theme.spacingMedium}>
          <SocialIconsWithLabel />
        </Box>
      </Flex>
    </Container>
  </FooterContainer>

Footer.propTypes = {
  avatar: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
}

export default Footer
