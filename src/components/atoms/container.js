import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import t from 'tachyons-js'

const ContainerItem = styled.div`
  ${t.center};
  max-width: ${props => props.theme.siteMaxWidth};
  padding-left: ${props => props.theme.spacingMediumLarge};
  padding-right: ${props => props.theme.spacingMediumLarge};
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
