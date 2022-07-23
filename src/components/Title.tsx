import React from 'react'
import styled from 'styled-components'

// TODO: remove margin bottom
const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0 0 50px 0;
`

export const Title: React.FC = () => {
  return <StyledTitle>XYZ PHOTOGRAPHY</StyledTitle>
}
