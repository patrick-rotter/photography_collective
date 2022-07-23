import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
`

export const Title: React.FC = () => {
  return <StyledTitle>XYZ PHOTOGRAPHY</StyledTitle>
}
