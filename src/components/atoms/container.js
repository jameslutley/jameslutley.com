import React from 'react'
import styled from 'react-emotion'
import t from 'tachyons-js'

const Container = styled.div`
  ${t.center};
  max-width: ${props => props.theme.siteMaxWidth};
  padding-left: ${props => props.theme.spacingMedium};
  padding-right: ${props => props.theme.spacingMedium};
`

export default ({ children }) =>
  <Container>
    {children}
  </Container>
