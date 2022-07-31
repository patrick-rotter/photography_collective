import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { sImageHeight, sImageWidth, padding } from '../../global/constants'
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
  initial: { opacity: 0 },
  exit: ({ isMovingLeft }: { isMovingLeft: boolean }) => ({
    x: isMovingLeft ? -(sImageWidth + padding) : 300,
    y: isMovingLeft ? sImageHeight + padding : -300,
    opacity: isMovingLeft ? 1 : 0
  })
}

export const RightPlaceholder: React.FC<SlideshowImage> = (props) => {
  const { isMovingLeft } = props
  const offset = 2

  return (
    <AnimatePresence exitBeforeEnter custom={{ isMovingLeft }}>
      <StyledPhoto
        $top={padding}
        $right={padding}
        $width={sImageWidth}
        $height={sImageHeight}
        src={photos[mod(props.activeIndex + offset, photos.length)].url}
        key={props.activeIndex + offset}
        alt="Right Placeholder"
        variants={variants}
        custom={{ isMovingLeft }}
        initial="initial"
        exit="exit"
        transition={transition}
      />
    </AnimatePresence>
  )
}
