import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const ContainerItem = styled.div`
  ${t.center};
  max-width: ${props => props.theme.siteMaxWidth};
  padding-left: ${props => props.theme.spacingMedium};
  padding-right: ${props => props.theme.spacingMedium};

  ${props => props.theme.Phablet} {
    padding-left: ${props => props.theme.spacingLarge};
    padding-right: ${props => props.theme.spacingLarge};
  }
`

const Container = ({ children }) =>
  <ContainerItem>
    {children}
  </ContainerItem>

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default Container
