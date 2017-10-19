import React from 'react'
import styled from 'react-emotion'
import t from 'tachyons-js'
import Icon from 'react-icons-kit'
import { twitter } from 'react-icons-kit/fa/twitter'
import { instagram } from 'react-icons-kit/fa/instagram'

const SocialIconLink = styled.a`
  ${t.flex};
  ${t.flex_wrap};
  ${t.items_center};
  ${t.link};
  margin-bottom: ${props => props.theme.spacingSmall};
  color: ${props => props.theme.gray};
`

const SocialIcon = styled(Icon)`
  width: ${props => props.theme.spacingMediumLarge};
  height: ${props => props.theme.spacingMediumLarge};
`

const SocialIconLabel = styled.span`
  padding-left: ${props => props.theme.spacingMedium};
  font-family: ${props => props.theme.serif};
  font-size: ${props => props.theme.fontSize6};
  line-height: calc(24 / 18);
`

const SocialIconsFollow = () =>
  <div>
    <SocialIconLink href="https://twitter.com/jameslutley">
      <SocialIcon icon={twitter} size={24} />
      <SocialIconLabel>Follow on Twitter</SocialIconLabel>
    </SocialIconLink>
    <SocialIconLink href="https://www.instagram.com/jameslutley/">
      <SocialIcon icon={instagram} size={24} />
      <SocialIconLabel>Follow on Instagram</SocialIconLabel>
    </SocialIconLink>
  </div>

export default SocialIconsFollow
