import React, { useState } from 'react'
import { NextPhoto } from '../photos/NextPhoto'
import { ActivePhoto } from '../photos/ActivePhoto'
import { PrevPhoto } from '../photos/PrevPhoto'
import { photos } from '../../fixtures/photos'
import { NextNextPhoto } from './NextNextPhoto'
import { PrevPrevPhoto } from './PrevPrevPhoto'
import { useStore } from '../../store'
import styled from 'styled-components'

const StyledSlideshow = styled.div`
  width: 100%;
  height: 100%;
`

export const Slideshow: React.FC = () => {
  const [exitAnimation, setExitAnimation] = useState('exitDown')
  const { activePhoto, setActivePhoto } = useStore((state) => state)

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
  }, [indices]) */

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
  const handleWheel = (e: any) => {
    if (Math.sign(e.nativeEvent.wheelDelta) === 1) {
      moveUp()
    } else {
      moveDown()
    }
  }

  return (
    <StyledSlideshow onWheel={handleWheel}>
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
  )
}
