import React, { useState } from 'react'
import { RightImage } from './RightImage'
import { ActiveImage } from './ActiveImage'
import { LeftImage } from './LeftImage'
import { RightPlaceholder } from './RightPlaceholder'
import { LeftPlaceholder } from './LeftPlaceholder'
import { useStore } from '../../store'
import styled from 'styled-components'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

const StyledSlideshow = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Slideshow: React.FC = () => {
  const { setPathLength } = useStore((state) => state)
  //const [exitAnimation, setExitAnimation] = useState('exitDown')

  const [[exitAnimation, offset], setOffset] = useState(['exitDown', 0])

  const animateCursor = () => {
    setPathLength(1)
    setTimeout(() => {
      setPathLength(0)
    }, 600)
  }

  const moveDown = () => {
    animateCursor()
    setOffset(['exitDown', offset + 1])
  }

  const moveUp = () => {
    animateCursor()
    setOffset(['exitUp', offset - 1])
  }

  // TODO: What type is event? https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
  /*  const handleWheel = (e: any) => {
    if (animationIsOngoing) {
      return
    }
    setTimeout(() => {
      setAnimationIsOngoing(false)
    }, 1300)

    setAnimationIsOngoing(true)
    if (Math.sign(e.nativeEvent.wheelDelta) === 1) {
      moveUp()
    } else {
      moveDown()
    }
  } */

  return (
    <ReactScrollWheelHandler
      upHandler={moveUp}
      downHandler={moveDown}
      timeout={1300}
    >
      <StyledSlideshow>
        <LeftPlaceholder offset={offset} exitAnimation={exitAnimation} />
        <LeftImage
          offset={offset}
          exitAnimation={exitAnimation}
          onPress={moveUp}
        />
        <ActiveImage offset={offset} exitAnimation={exitAnimation} />
        <RightImage
          offset={offset}
          exitAnimation={exitAnimation}
          onPress={moveDown}
        />
        <RightPlaceholder offset={offset} exitAnimation={exitAnimation} />
      </StyledSlideshow>
    </ReactScrollWheelHandler>
  )
}
