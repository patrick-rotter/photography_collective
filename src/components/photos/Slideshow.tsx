import React, { useState } from 'react'
import { NextPhoto } from '../photos/NextPhoto'
import { ActivePhoto } from '../photos/ActivePhoto'
import { PrevPhoto } from '../photos/PrevPhoto'
import { photos } from '../../fixtures/photos'

export const Slideshow: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState(photos[0])
  const [prevPhoto, setPrevPhoto] = useState(photos[4])
  const [nextPhoto, setNextPhoto] = useState(photos[1])

  setTimeout(() => {
    setActivePhoto(photos[1])
    setPrevPhoto(photos[0])
    setNextPhoto(photos[2])
  }, 1000)

  return (
    <div>
      <NextPhoto {...nextPhoto} />
      <ActivePhoto {...activePhoto} />
      <PrevPhoto {...prevPhoto} />
    </div>
  )
}
