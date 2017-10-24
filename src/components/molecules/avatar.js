import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import t from 'tachyons-js'

const AvatarContainer = styled.div`
  ${t.flex};
  ${t.items_center};
  line-height: ${props => props.theme.lineHeightSolid};
`

const AvatarImage = styled(Img)`
  ${t.br_100};
`

const AvatarContent = styled.div`
  ${t.flex_auto};
  padding-left: ${props => props.theme.spacingMedium};
`

const AvatarTitle = styled.h4`
  ${t.mv0};
  font-size: ${props => props.theme.fontSize6};
  line-height: calc(24 / 18);
  color: ${props => props.theme.nearBlack};
`

const AvatarText = styled.span`
  ${t.db};
  ${t.i};
  font-family: ${props => props.theme.serif};
  font-size: ${props => props.theme.fontSize7};
  line-height: calc(24 / 16);
  color: ${props => props.theme.gray};
`

const Avatar = ({ avatar, siteTitle }) =>
  <AvatarContainer>
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
  </AvatarContainer>

Avatar.propTypes = {
  avatar: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
}

export default Avatar
