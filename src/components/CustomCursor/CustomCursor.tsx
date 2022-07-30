import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useStore } from '../../store'

// z-index and position are necessary to layer svg on top of other elements and let mouse-events pass through
const StyledCursor = styled.svg`
  position: relative;
  pointer-events: none;
  z-index: 1000;
`

const variants = {
  initial: {
    rotate: 90,
    pathLength: 0
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: 'easeInOut'
    }
  }
}

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<any>(null)
  const pathLength = useStore((state) => state.pathLength)

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
        <motion.path
          id="progress"
          d="M1,21a20,20 0 1,0 40,0a20,20 0 1,0 -40,0"
          stroke="white"
          strokeLinecap="round"
          variants={variants}
          initial={{
            rotate: 90,
            pathLength: 0
          }}
          animate={{
            pathLength: pathLength,
            transition: {
              duration: 0.6,
              ease: 'easeInOut'
            }
          }}
        />
      </g>
    </StyledCursor>
  )
}
