import React, { useState } from 'react'
import { NextPhoto } from './RightImage'
import { ActivePhoto } from './ActiveImage'
import { PrevPhoto } from './LeftImage'
import { photos } from '../../fixtures/photos'
import { NextNextPhoto } from './RightPlaceholder'
import { PrevPrevPhoto } from './LeftPlaceholder'
import { useStore } from '../../store'
import styled from 'styled-components'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

const StyledSlideshow = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Slideshow: React.FC = () => {
  const { activePhoto, setActivePhoto } = useStore((state) => state)
  const [exitAnimation, setExitAnimation] = useState('exitDown')

  const [indices, setIndices] = useState({
    prevPrevIndex: photos.length - 2,
    prevIndex: photos.length - 1,
    activeIndex: 0,
    nextIndex: 1,
    nextNextIndex: 2
  })

  const [images, setImages] = useState({
    prevPrev: photos[indices.prevPrevIndex],
    prev: photos[indices.prevIndex],
    active: photos[indices.activeIndex],
    next: photos[indices.nextIndex],
    nextNext: photos[indices.nextNextIndex]
  })

  const getNextPhotoIndex = (index: number): number => {
    if (index >= photos.length - 1) {
      return 0
    }
    return index + 1
  }

  const getPrevPhotoIndex = (index: number): number => {
    if (index === 0) {
      return photos.length - 1
    }
    return index - 1
  }

  const moveDown = () => {
    setExitAnimation('exitDown')

    setIndices({
      prevPrevIndex: getNextPhotoIndex(indices.prevPrevIndex),
      prevIndex: getNextPhotoIndex(indices.prevIndex),
      activeIndex: getNextPhotoIndex(indices.activeIndex),
      nextIndex: getNextPhotoIndex(indices.nextIndex),
      nextNextIndex: getNextPhotoIndex(indices.nextNextIndex)
    })

    setImages({
      prevPrev: photos[indices.prevPrevIndex],
      prev: photos[indices.prevIndex],
      active: photos[indices.activeIndex],
      next: photos[indices.nextIndex],
      nextNext: photos[indices.nextNextIndex]
    })

    setActivePhoto(indices.activeIndex)

    console.log(activePhoto)

    console.log(indices.prevPrevIndex)
    console.log(indices.prevIndex)
    console.log(indices.activeIndex)
    console.log(indices.nextIndex)
    console.log(indices.nextNextIndex)
    console.log('done')
  }

  /* useEffect(() => {
    setImages({
      prevPrev: photos[indices.prevPrevIndex],
      prev: photos[indices.prevIndex],
      active: photos[indices.activeIndex],
      next: photos[indices.nextIndex],
      nextNext: photos[indices.nextNextIndex]
    })
  }) */

  const moveUp = () => {
    setExitAnimation('exitUp')

    setIndices({
      prevPrevIndex: getPrevPhotoIndex(indices.prevPrevIndex),
      prevIndex: getPrevPhotoIndex(indices.prevIndex),
      activeIndex: getPrevPhotoIndex(indices.activeIndex),
      nextIndex: getPrevPhotoIndex(indices.nextIndex),
      nextNextIndex: getPrevPhotoIndex(indices.nextNextIndex)
    })

    setImages({
      prevPrev: photos[indices.prevPrevIndex],
      prev: photos[indices.prevIndex],
      active: photos[indices.activeIndex],
      next: photos[indices.nextIndex],
      nextNext: photos[indices.nextNextIndex]
    })

    setActivePhoto(indices.activeIndex)

    console.log(indices.prevPrevIndex)
    console.log(indices.prevIndex)
    console.log(indices.activeIndex)
    console.log(indices.nextIndex)
    console.log(indices.nextNextIndex)
    console.log('done')
  }

  // TODO: What type is event? https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
  /*   const handleWheel = (e: any) => {
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
        <NextNextPhoto {...images.nextNext} exitAnimation={exitAnimation} />
        <NextPhoto
          {...images.next}
          exitAnimation={exitAnimation}
          onPress={moveDown}
        />
        <ActivePhoto {...images.active} exitAnimation={exitAnimation} />
        <PrevPhoto
          {...images.prev}
          exitAnimation={exitAnimation}
          onPress={moveUp}
        />
        <PrevPrevPhoto {...images.prevPrev} exitAnimation={exitAnimation} />
      </StyledSlideshow>
    </ReactScrollWheelHandler>
  )
}
