import React from 'react'
import styled from 'styled-components'
import { useStore } from '../../store'

// TODO: text is a little off to left
const StyledImageText = styled.div`
  width: 850px;
  position: relative;
  font-size: 220px;
  text-transform: uppercase;
  text-align: center;
  line-height: 80%;
  letter-spacing: 0.04em;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &::before {
    content: attr(data-text);
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(19.95% 0, 19.95% 100%, 80.1% 100%, 80.1% 0);
  }

  &::after {
    content: attr(data-text);
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: white;
  }
`

export const ImageText: React.FC = () => {
  const { text } = useStore((state) => state.activePhoto)

  return <StyledImageText data-text={text}></StyledImageText>
}
