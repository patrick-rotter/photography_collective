import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import {
  lPhotoHeight,
  lPhotoWidth,
  padding,
  sPhotoWidth,
  sPhotoHeight
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

// exit y: -6 is necessary for smooth docking... but why?
const variants = {
  exitDown: ({ width, height }: { width: number; height: number }) => ({
    x: -(width / 2 - (lPhotoWidth / 2 + padding)),
    y: height / 2 - 6,
    width: sPhotoWidth,
    height: sPhotoHeight
  }),
  exitUp: ({ width, height }: { width: number; height: number }) => ({
    x: width / 2 - 6,
    y: -height / 2 + (lPhotoHeight / 2 + padding),
    width: sPhotoWidth,
    height: sPhotoHeight
  })
}

export const transition = {
  type: 'tween',
  duration: 1,
  ease: 'easeOut'
}

export const ActiveImage: React.FC<SlideshowImage> = (props) => {
  const { width, height } = useWindowSize()
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setShowText(true)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter custom={{ width, height }}>
      <StyledPhoto
        $marginTop={-lPhotoHeight / 2}
        $marginLeft={-lPhotoWidth / 2}
        $width={lPhotoWidth}
        $height={lPhotoHeight}
        src={photos[mod(props.offset, photos.length)].url}
        key={props.offset}
        alt="Active image"
        variants={variants}
        custom={{ width, height }}
        exit={props.exitAnimation}
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
