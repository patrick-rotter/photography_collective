import React, { useState } from 'react'
import { NextPhoto } from '../photos/NextPhoto'
import { ActivePhoto } from '../photos/ActivePhoto'
import { PrevPhoto } from '../photos/PrevPhoto'
import { photos } from '../../fixtures/photos'
import { NextNextPhoto } from './NextNextPhoto'
import { PrevPrevPhoto } from './PrevPrevPhoto'

export const Slideshow: React.FC = () => {
  const [indices, setIndices] = useState({
    prevPrevIndex: 3,
    prevIndex: 4,
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
      return 4
    }
    return index - 1
  }

  const moveDown = () => {
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

    console.log(indices.prevPrevIndex)
    console.log(indices.prevIndex)
    console.log(indices.activeIndex)
    console.log(indices.nextIndex)
    console.log(indices.nextNextIndex)
    console.log('done')
  }

  const moveUp = () => {
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
  }

  return (
    <div>
      <NextNextPhoto {...images.nextNext} />
      <NextPhoto {...images.next} onPress={moveDown} />
      <ActivePhoto {...images.active} />
      <PrevPhoto {...images.prev} onPress={moveUp} />
      <PrevPrevPhoto {...images.prevPrev} />
    </div>
  )
}
