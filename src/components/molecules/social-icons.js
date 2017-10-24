import React from 'react'
import styled from 'react-emotion'
import t from 'tachyons-js'
import Icon from 'react-icons-kit'
import { twitter } from 'react-icons-kit/fa/twitter'
import { instagram } from 'react-icons-kit/fa/instagram'
import { dribbble } from 'react-icons-kit/fa/dribbble'
import { github } from 'react-icons-kit/fa/github'

const SocialIconsInner = styled.div`
  ${t.flex};
  ${t.flex_wrap};
  ${t.items_center};
  ${t.justify_end};
`

const SocialIconLink = styled.a`
  ${t.link};
  ${t.inline_flex};
  padding: ${props => props.theme.spacingExtraSmall};
  line-height: ${props => props.theme.lineHeightSolid};
  color: ${props => props.theme.nearBlack};

  &:last-child {
    ${t.pr0};
  }

  ${props => props.theme.Mobile} {
    padding: ${props => props.theme.spacingSmallMedium};
  }
`

export default () =>
  <SocialIconsInner>
    <SocialIconLink href="https://twitter.com/jameslutley">
      <Icon icon={twitter} size={24} />
    </SocialIconLink>
    <SocialIconLink href="https://www.instagram.com/jameslutley/">
      <Icon icon={instagram} size={24} />
    </SocialIconLink>
    <SocialIconLink href="https://dribbble.com/jameslutley">
      <Icon icon={dribbble} size={24} />
    </SocialIconLink>
    <SocialIconLink href="https://github.com/jameslutley">
      <Icon icon={github} size={24} />
    </SocialIconLink>
  </SocialIconsInner>
