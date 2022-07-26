import React, { useState } from 'react'
import { NextPhoto } from '../photos/NextPhoto'
import { ActivePhoto } from '../photos/ActivePhoto'
import { PrevPhoto } from '../photos/PrevPhoto'
import { photos } from '../../fixtures/photos'
import { NextNextPhoto } from './NextNextPhoto'
import { PrevPrevPhoto } from './PrevPrevPhoto'

export const Slideshow: React.FC = () => {
  const [prevprevPhoto, setPrevPrevPhoto] = useState(photos[3])
  const [prevPhoto, setPrevPhoto] = useState(photos[4])
  const [activePhoto, setActivePhoto] = useState(photos[0])
  const [nextPhoto, setNextPhoto] = useState(photos[1])
  const [nextNextPhoto, setNextNextPhoto] = useState(photos[2])

  const handleClick = () => {
    setPrevPrevPhoto(photos[4])
    setPrevPhoto(photos[0])
    setActivePhoto(photos[1])
    setNextPhoto(photos[2])
    setNextNextPhoto(photos[3])
  }

  return (
    <div>
      <NextNextPhoto {...nextNextPhoto} />
      <NextPhoto {...nextPhoto} />
      <ActivePhoto {...activePhoto} />
      <PrevPhoto {...prevPhoto} />
      <PrevPrevPhoto {...prevprevPhoto} />
      <div onClick={handleClick}>NEXT</div>
    </div>
  )
}
