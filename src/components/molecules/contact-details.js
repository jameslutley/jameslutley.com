import React from 'react'
import styled from 'react-emotion'
import t from 'tachyons-js'

const ContactDetails = styled.div`
  margin-top: ${props => props.theme.spacingMediumLarge};
  margin-bottom: ${props => props.theme.spacingMediumLarge};
  font-size: ${props => props.theme.fontSize7};
  line-height: ${props => props.theme.lineHeightCopy};

  ${props => props.theme.Phablet} {
    ${t.mv0};
  }

  ${props => props.theme.VVHd} {
    font-size: ${props => props.theme.fontSize6};
    line-height: calc(32 / 18);
  }
`

const ContactDetailsLink = styled.a`
  ${t.db};
  ${t.link};
  margin-bottom: ${props => props.theme.spacingSmall};
  font-family: ${props => props.theme.sansSerif};
  color: ${props => props.theme.gray};

  ${props => props.theme.Desktop} {
    margin-bottom: ${props => props.theme.spacingMedium};
  }

  &:last-child {
    ${t.mb0};
  }
`

export default () =>
  <ContactDetails>
    <ContactDetailsLink href="tel:+84935185790">+84 (0)93 5185 790</ContactDetailsLink>
    <ContactDetailsLink href="mailto:hello@jameslutley.com">hello@jameslutley.com</ContactDetailsLink>
  </ContactDetails>
