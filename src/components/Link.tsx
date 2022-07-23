import React from 'react'
import styled from 'styled-components'

interface Props {}

const StyledLink = styled.div`
  font-family: Helvetica;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 109px;
`

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #202020;
  width: 109px;
  height: 29px;
  border-radius: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: #e9e9e9;
  }
`

const StyledDate = styled.div`
  margin: 16px 0;
  text-align: right;
`

export const Link: React.FC<Props> = () => {
  return (
    <StyledLink>
      <div>Johanna Hobel for Vogue</div>
      <StyledDate>Jun 2019</StyledDate>
      <StyledButton>HAVE A LOOK</StyledButton>
    </StyledLink>
  )
}
