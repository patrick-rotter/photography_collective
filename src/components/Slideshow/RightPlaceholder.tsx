import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { sPhotoHeight, sPhotoWidth, padding } from '../../global/constants'
import { SlideshowImage, StyledPhotoType } from '../../global/types'
import { transition } from './ActiveImage'
import { photos } from '../../fixtures/photos'
import { mod } from '../../util'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: fixed;
  top: ${(props) => -props.$height}px;
  right: ${(props) => -props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`

const variants = {
  initial: {
    opacity: 0
  },
  exitDown: {
    x: -(sPhotoWidth + padding),
    y: sPhotoHeight + padding,
    opacity: 1
  },
  exitUp: {
    x: 300,
    y: -300
  }
}

export const RightPlaceholder: React.FC<SlideshowImage> = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledPhoto
        $top={padding}
        $right={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={photos[mod(props.offset + 2, photos.length)].url}
        key={props.offset + 2}
        alt="NextNext image"
        variants={variants}
        initial="initial"
        exit={props.exitAnimation}
        transition={transition}
      />
    </AnimatePresence>
  )
}
