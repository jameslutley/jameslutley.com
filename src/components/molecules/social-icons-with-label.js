import React from 'react'
import styled from 'react-emotion'
import { Flex, Box } from 'grid-emotion'
import t from 'tachyons-js'
import Icon from 'react-icons-kit'
import { twitter } from 'react-icons-kit/fa/twitter'
import { instagram } from 'react-icons-kit/fa/instagram'
import { dribbble } from 'react-icons-kit/fa/dribbble'
import { github } from 'react-icons-kit/fa/github'

const SocialIconLink = styled.a`
  ${t.flex};
  ${t.flex_wrap};
  ${t.items_center};
  ${t.link};
  margin-bottom: ${props => props.theme.spacingMedium};
  color: ${props => props.theme.gray};
`

const SocialIcon = styled(Icon)`
  width: ${props => props.theme.spacingMediumLarge};
  height: ${props => props.theme.spacingMediumLarge};
`

const SocialIconLabel = styled.span`
  padding-left: ${props => props.theme.spacingMedium};
  font-size: ${props => props.theme.fontSize6};
  line-height: calc(32 / 18);
`

const SocialIconsWithLabel = () =>
  <Flex wrap align='center'>
    <Box width={1/2}>
      <SocialIconLink href="https://twitter.com/jameslutley">
        <SocialIcon icon={twitter} size={24} />
        <SocialIconLabel>Twitter</SocialIconLabel>
      </SocialIconLink>
    </Box>
    <Box width={1/2}>
      <SocialIconLink href="https://www.instagram.com/jameslutley/">
        <SocialIcon icon={instagram} size={24} />
        <SocialIconLabel>Instagram</SocialIconLabel>
      </SocialIconLink>
    </Box>
    <Box width={1/2}>
      <SocialIconLink href="https://dribbble.com/jameslutley">
        <SocialIcon icon={dribbble} size={24} />
        <SocialIconLabel>Dribbble</SocialIconLabel>
      </SocialIconLink>
    </Box>
    <Box width={1/2}>
      <SocialIconLink href="https://github.com/jameslutley">
        <SocialIcon icon={github} size={24} />
        <SocialIconLabel>GitHub</SocialIconLabel>
      </SocialIconLink>
    </Box>
  </Flex>

export default SocialIconsWithLabel
