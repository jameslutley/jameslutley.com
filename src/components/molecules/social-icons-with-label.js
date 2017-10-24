import React from 'react'
import styled from 'react-emotion'
import t from 'tachyons-js'
import Icon from 'react-icons-kit'
import { twitter } from 'react-icons-kit/fa/twitter'
import { instagram } from 'react-icons-kit/fa/instagram'
import { dribbble } from 'react-icons-kit/fa/dribbble'
import { github } from 'react-icons-kit/fa/github'

const SocialIconWithLabelContainer = styled.div`
  ${t.flex};
  ${t.flex_wrap};
  ${t.items_center};
  margin-left: -${props => props.theme.spacingMedium};
  margin-right: -${props => props.theme.spacingMedium};

  ${props => props.theme.Phablet} {
    margin-top: ${props => props.theme.spacingMediumLarge};
    margin-bottom: ${props => props.theme.spacingMediumLarge};
  }

  ${props => props.theme.Desktop} {
    ${t.mv0};
  }
`

const SocialIconLink = styled.a`
  ${t.flex};
  ${t.flex_wrap};
  ${t.items_center};
  ${t.w_100};
  ${t.link};
  margin-bottom: ${props => props.theme.spacingMedium};
  padding-left: ${props => props.theme.spacingMedium};
  padding-right: ${props => props.theme.spacingMedium};
  font-family: ${props => props.theme.sansSerif};
  color: ${props => props.theme.gray};

  ${props => props.theme.Mobile} {
    ${t.w_50};
  }

  ${props => props.theme.Tablet} {
    ${t.w_25};
  }

  ${props => props.theme.Desktop} {
    ${t.w_50};
  }
`

const SocialIcon = styled(Icon)`
  width: ${props => props.theme.spacingMediumLarge};
  height: ${props => props.theme.spacingMediumLarge};
`

const SocialIconLabel = styled.span`
  padding-left: ${props => props.theme.spacingMedium};
  font-size: ${props => props.theme.fontSize7};
  line-height: ${props => props.theme.lineHeightCopy};

  ${props => props.theme.VVHd} {
    font-size: ${props => props.theme.fontSize6};
    line-height: calc(32 / 18);
  }
`

const SocialIconsWithLabel = () =>
  <SocialIconWithLabelContainer>
    <SocialIconLink href="https://twitter.com/jameslutley">
      <SocialIcon icon={twitter} size={24} />
      <SocialIconLabel>Twitter</SocialIconLabel>
    </SocialIconLink>
    <SocialIconLink href="https://www.instagram.com/jameslutley/">
      <SocialIcon icon={instagram} size={24} />
      <SocialIconLabel>Instagram</SocialIconLabel>
    </SocialIconLink>
    <SocialIconLink href="https://dribbble.com/jameslutley">
      <SocialIcon icon={dribbble} size={24} />
      <SocialIconLabel>Dribbble</SocialIconLabel>
    </SocialIconLink>
    <SocialIconLink href="https://github.com/jameslutley">
      <SocialIcon icon={github} size={24} />
      <SocialIconLabel>GitHub</SocialIconLabel>
    </SocialIconLink>
  </SocialIconWithLabelContainer>

export default SocialIconsWithLabel
