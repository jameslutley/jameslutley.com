import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import { Flex } from 'grid-emotion'
import t from 'tachyons-js'

const AvatarImage = styled(Img)`
  ${t.br_100};
`

const AvatarContent = styled.div`
  ${t.flex_auto};
  padding-left: ${props => props.theme.spacingMedium};
`

const AvatarTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSize5};
  line-height: calc(24 / 18);
  color: ${props => props.theme.nearBlack};
`

const AvatarText = styled.span`
  ${t.db};
  ${t.i};
  font-family: ${props => props.theme.serif};
  color: ${props => props.theme.gray};
`

const Avatar = ({ avatar, siteTitle }) =>
  <Flex align='center'>
    <AvatarImage
      resolutions={avatar}
      alt={siteTitle}
    />
    <AvatarContent>
      <AvatarTitle>
        {siteTitle}
      </AvatarTitle>
      <AvatarText>
        Designer &amp; Developer
      </AvatarText>
    </AvatarContent>
  </Flex>

Avatar.propTypes = {
  avatar: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
}

export default Avatar
