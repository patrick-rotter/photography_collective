import React from 'react'
import styled from 'styled-components'
import { useStore } from '../../store'

// TODO: text is a little off to left
const StyledImageText = styled.div`
  font-size: 220px;
  text-transform: uppercase;
  z-index: 100;
  text-align: center;
  line-height: 80%;
  letter-spacing: 0.04em;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

export const ImageText: React.FC = () => {
  const { text } = useStore((state) => state.activePhoto)

  return <StyledImageText>{text}</StyledImageText>
}
