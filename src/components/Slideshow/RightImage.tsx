import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import {
  sPhotoHeight,
  sPhotoWidth,
  lPhotoHeight,
  lPhotoWidth,
  padding
} from '../../global/constants'
import { SlideshowImage, StyledPhotoType } from '../../global/types'
import { transition } from './ActiveImage'
import { useWindowSize } from 'usehooks-ts'
import { photos } from '../../fixtures/photos'
import { mod } from '../../util'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: absolute;
  top: ${(props) => props.$top}px;
  right: ${(props) => props.$right}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
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
    x: isMovingLeft ? -(width / 2 - (lPhotoWidth / 2 + padding)) : 300,
    y: isMovingLeft ? height / 2 - (lPhotoHeight / 2 + padding) : -300,
    width: isMovingLeft ? lPhotoWidth : sPhotoWidth,
    height: isMovingLeft ? lPhotoHeight : sPhotoHeight
  })
}

export const RightImage: React.FC<SlideshowImage> = (props) => {
  const { width, height } = useWindowSize()
  const { isMovingLeft } = props

  return (
    <AnimatePresence exitBeforeEnter custom={{ width, height, isMovingLeft }}>
      <StyledPhoto
        $top={padding}
        $right={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={photos[mod(props.offset + 1, photos.length)].url}
        key={props.offset + 1}
        alt="Next image"
        variants={variants}
        custom={{ width, height, isMovingLeft }}
        exit="exit"
        transition={transition}
        onClick={props.onPress}
      />
    </AnimatePresence>
  )
}
