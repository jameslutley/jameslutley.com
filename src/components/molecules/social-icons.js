import React from 'react'
import styled from 'react-emotion'
import { Flex } from 'grid-emotion'
import t from 'tachyons-js'
import Icon from 'react-icons-kit'
import { twitter } from 'react-icons-kit/fa/twitter'
import { instagram } from 'react-icons-kit/fa/instagram'
import { dribbble } from 'react-icons-kit/fa/dribbble'
import { github } from 'react-icons-kit/fa/github'

const SocialIconLink = styled.a`
  ${t.link};
  ${t.dib};
  padding: ${props => props.theme.spacingSmallMedium};
  width: ${props => props.theme.spacingMediumLarge};
  height: ${props => props.theme.spacingMediumLarge};
  line-height: ${props => props.theme.lineHeightSolid};
  color: ${props => props.theme.nearBlack};

  &:last-child {
    padding-right: 0;
  }
`

export default () =>
  <Flex wrap align='center' justify='flex-end'>
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
  </Flex>
