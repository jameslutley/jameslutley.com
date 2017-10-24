import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import t from 'tachyons-js'

import Container from '../atoms/container'
import Avatar from '../molecules/avatar'
import ContactDetails from '../molecules/contact-details'
import SocialIconsWithLabel from '../molecules/social-icons-with-label'

const FooterContainer = styled.footer`
  ${t.bt};
  padding-top: calc(${props => props.theme.spacingMediumLarge} - 1px);
  padding-bottom: ${props => props.theme.spacingSmall};
  border-color: ${props => props.theme.lightGray};

  ${props => props.theme.Desktop} {
    padding-top: calc(${props => props.theme.spacingExtraLarge} - 1px);
    padding-bottom: ${props => props.theme.spacingLarge};
  }

  ${props => props.theme.VVHd} {
    padding-top: calc(${props => props.theme.spacingExtraExtraLarge} - 1px);
    padding-bottom: ${props => props.theme.spacingExtraLarge};
  }
`

const FooterInner = styled.div`
  ${t.flex};
  ${t.flex_wrap};
  margin-left: -${props => props.theme.spacingMedium};
  margin-right: -${props => props.theme.spacingMedium};
`

const FooterItemQuarter = styled.div`
  ${t.flex};
  ${t.items_center};
  ${t.w_100};
  padding-left: ${props => props.theme.spacingMedium};
  padding-right: ${props => props.theme.spacingMedium};

  ${props => props.theme.Phablet} {
    ${t.w_50};
  }

  ${props => props.theme.Desktop} {
    ${t.items_start};
    ${t.w_25};
  }
`

const FooterItemHalf = styled.div`
  ${t.w_100};
  padding-left: ${props => props.theme.spacingMedium};
  padding-right: ${props => props.theme.spacingMedium};

  ${props => props.theme.Desktop} {
    ${t.w_50};
  }
`

const Footer = ({ avatar, siteTitle }) =>
  <FooterContainer role='contentinfo'>
    <Container>
      <FooterInner>
        <FooterItemQuarter>
          <Avatar avatar={avatar} siteTitle={siteTitle} />
        </FooterItemQuarter>
        <FooterItemQuarter>
          <ContactDetails />
        </FooterItemQuarter>
        <FooterItemHalf>
          <SocialIconsWithLabel />
        </FooterItemHalf>
      </FooterInner>
    </Container>
  </FooterContainer>

Footer.propTypes = {
  avatar: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
}

export default Footer
