import React from 'react'
import { RightImage } from './RightImage'
import { ActiveImage } from './ActiveImage'
import { LeftImage } from './LeftImage'
import { RightPlaceholder } from './RightPlaceholder'
import { LeftPlaceholder } from './LeftPlaceholder'
import { useStore } from '../../store'
import styled from 'styled-components'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'
import { mod } from '../../util'
import { photos } from '../../fixtures/photos'

const StyledSlideshow = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Slideshow: React.FC = () => {
  const {
    activeIndex,
    setActiveIndex,
    isMovingLeft,
    setIsMovingLeft,
    setPathLength
  } = useStore((state) => state)

  const animateCursor = () => {
    setPathLength(1)
    setTimeout(() => {
      setPathLength(0)
    }, 600)
  }

  const moveCarouselLeft = () => {
    animateCursor()
    setActiveIndex(mod(activeIndex + 1, photos.length))
    setIsMovingLeft(true)
  }

  const moveCarouselRight = () => {
    animateCursor()
    setActiveIndex(mod(activeIndex - 1, photos.length))
    setIsMovingLeft(false)
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
      upHandler={moveCarouselRight}
      downHandler={moveCarouselLeft}
      timeout={1300}
    >
      <StyledSlideshow>
        <LeftPlaceholder offset={activeIndex} isMovingLeft={isMovingLeft} />
        <LeftImage
          offset={activeIndex}
          isMovingLeft={isMovingLeft}
          onPress={moveCarouselRight}
        />
        <ActiveImage offset={activeIndex} isMovingLeft={isMovingLeft} />
        <RightImage
          offset={activeIndex}
          isMovingLeft={isMovingLeft}
          onPress={moveCarouselLeft}
        />
        <RightPlaceholder offset={activeIndex} isMovingLeft={isMovingLeft} />
      </StyledSlideshow>
    </ReactScrollWheelHandler>
  )
}
