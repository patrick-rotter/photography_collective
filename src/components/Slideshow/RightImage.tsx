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
  exitDown: ({ width, height }: { width: number; height: number }) => ({
    x: -(width / 2 - (lPhotoWidth / 2 + padding)),
    y: height / 2 - (lPhotoHeight / 2 + padding),
    width: lPhotoWidth,
    height: lPhotoHeight
  }),
  exitUp: {
    x: 300,
    y: -300,
    opacity: 0
  }
}

export const RightImage: React.FC<SlideshowImage> = (props) => {
  const { width, height } = useWindowSize()

  return (
    <AnimatePresence exitBeforeEnter custom={{ width, height }}>
      <StyledPhoto
        $top={padding}
        $right={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={photos[mod(props.offset + 1, photos.length)].url}
        key={props.offset + 1}
        alt="Next image"
        variants={variants}
        custom={{ width, height }}
        exit={props.exitAnimation}
        transition={transition}
        onClick={props.onPress}
      />
    </AnimatePresence>
  )
}
