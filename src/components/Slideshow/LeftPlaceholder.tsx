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
  bottom: ${(props) => -props.$height}px;
  left: ${(props) => -props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`

const variants = {
  initial: {
    opacity: 0
  },
  exit: ({ isMovingLeft }: { isMovingLeft: boolean }) => ({
    x: isMovingLeft ? -300 : sPhotoWidth + padding,
    y: isMovingLeft ? 300 : -(sPhotoHeight + padding),
    opacity: isMovingLeft ? 0 : 1
  })
}

export const LeftPlaceholder: React.FC<SlideshowImage> = (props) => {
  const { isMovingLeft } = props

  return (
    <AnimatePresence exitBeforeEnter custom={{ isMovingLeft }}>
      <StyledPhoto
        $bottom={padding}
        $left={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={photos[mod(props.offset - 2, photos.length)].url}
        key={props.offset - 2}
        alt="PrevPrev image"
        variants={variants}
        custom={{ isMovingLeft }}
        initial="initial"
        exit="exit"
        transition={transition}
      />
    </AnimatePresence>
  )
}
