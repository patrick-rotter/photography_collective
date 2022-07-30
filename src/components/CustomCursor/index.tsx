import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const StyledFull = styled.div`
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  opacity: 0.4;
  border: 1px solid #ffffff;
  transform: translate3d(0, 0, 0);
`

const StyledDot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  left: calc(50% - 4px / 2);
  top: calc(50% - 4px / 2);
  background: #ffffff;
`

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  return (
    <StyledFull ref={cursorRef}>
      <StyledDot />
    </StyledFull>
  )
}
