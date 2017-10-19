import React from 'react'
import styled from 'react-emotion'
import t from 'tachyons-js'

const ContactDetails = styled.div`
  font-size: ${props => props.theme.fontSize6};
  line-height: calc(32 / 18);
`

const ContactDetailsLink = styled.a`
  ${t.db};
  ${t.link};
  margin-bottom: ${props => props.theme.spacingMedium};
  color: ${props => props.theme.gray};
`

export default () =>
  <ContactDetails>
    <ContactDetailsLink href="tel:+84935185790">+84 (0)93 5185 790</ContactDetailsLink>
    <ContactDetailsLink href="mailto:hello@jameslutley.com">hello@jameslutley.com</ContactDetailsLink>
  </ContactDetails>
