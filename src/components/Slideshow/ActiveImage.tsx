import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import {
  lImageHeigth,
  lImageWidth,
  padding,
  sImageWidth,
  sImageHeight,
  animationTimeInSec
} from '../../global/constants'
import { SlideshowImage, StyledPhotoType } from '../../global/types'
import { ImageText } from '../ImageText/ImageText'
import { IndicatorBar } from '../IndicatorBar/IndicatorBar'
import { useWindowSize } from 'usehooks-ts'
import { photos } from '../../fixtures/photos'
import { mod } from '../../util'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: ${(props) => props.$marginTop}px;
  margin-left: ${(props) => props.$marginLeft}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`

const Container = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`

const variants = {
  exit: ({
    width,
    height,
    isMovingLeft
  }: {
    width: number
    height: number
    isMovingLeft: boolean
  }) => ({
    x: isMovingLeft
      ? -(width / 2 - (lImageWidth / 2 + padding))
      : width / 2 - 9,
    y: isMovingLeft
      ? height / 2 - 6
      : -height / 2 + (lImageHeigth / 2 + padding),
    width: sImageWidth,
    height: sImageHeight
  })
}

export const transition = {
  type: 'tween',
  duration: animationTimeInSec,
  ease: 'easeOut'
}

export const ActiveImage: React.FC<SlideshowImage> = (props) => {
  const { width, height } = useWindowSize()
  const [showText, setShowText] = useState(false)
  const { isMovingLeft } = props

  useEffect(() => {
    setShowText(true)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter custom={{ width, height, isMovingLeft }}>
      <StyledPhoto
        $marginTop={-lImageHeigth / 2}
        $marginLeft={-lImageWidth / 2}
        $width={lImageWidth}
        $height={lImageHeigth}
        src={photos[mod(props.activeIndex, photos.length)].url}
        key={props.activeIndex}
        alt="Active image"
        variants={variants}
        custom={{ width, height, isMovingLeft }}
        exit="exit"
        transition={transition}
      />
      {showText && (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ImageText />
          <IndicatorBar />
        </Container>
      )}
    </AnimatePresence>
  )
}
