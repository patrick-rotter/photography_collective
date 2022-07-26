import React from 'react'
import styled from 'styled-components'
import { useStore } from '../store'

const StyledLink = styled.div`
  position: absolute;
  bottom: 93px;
  right: 155px;
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

export const Link: React.FC = () => {
  const { author, commissionedFor, date } = useStore(
    (state) => state.activePhoto
  )
  const month = date.toLocaleString('default', { month: 'short' })
  const year = date.getFullYear()

  return (
    <StyledLink>
      <div>
        {author} for {commissionedFor}{' '}
      </div>
      <StyledDate>
        {month} {year}
      </StyledDate>
      <StyledButton>HAVE A LOOK</StyledButton>
    </StyledLink>
  )
}
