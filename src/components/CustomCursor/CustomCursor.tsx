import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

/* const StyledFull = styled.div`
  pointer-events: none;
  overflow: hidden;
  z-index: 999;
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translate3d(0, 0, 0);
`

const StyledDot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  left: calc(50% - 4px / 2);
  top: calc(50% - 4px / 2);
  background: #ffffff;
` */

// z-index and position to let svg appear on top and let mouse-events pass through
const StyledCursor = styled.svg`
  position: relative;
  pointer-events: none;
  z-index: 1000;
`

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  return (
    <StyledCursor
      ref={cursorRef}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="cursor">
        <circle id="dot" cx="21" cy="21" r="2" fill="white" />
        <circle id="full" opacity="0.1" cx="21" cy="21" r="20" stroke="white" />
        <path
          id="progress"
          d="M41 21C41 9.9543 32.0457 1 21 1"
          stroke="white"
          strokeLinecap="round"
        />
      </g>
    </StyledCursor>
  )
}
