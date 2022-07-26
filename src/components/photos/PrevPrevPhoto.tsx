import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { sPhotoHeight, sPhotoWidth, padding } from '../../global/constants'
import { StyledPhotoType } from '../../global/types'
import { Photo } from '../../global/types'
import { transition } from './ActivePhoto'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: fixed;
  bottom: ${(props) => -props.$height}px;
  left: ${(props) => -props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
  cursor: pointer;
`

const variants = {
  exit: {
    x: -300,
    y: 300,
    opacity: 0
  }
}

export const PrevPrevPhoto: React.FC<Photo> = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledPhoto
        $bottom={padding}
        $left={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={`./images/image0${props.id}@2x.jpg`}
        key={props.id}
        alt="PrevPrev image"
        variants={variants}
        transition={transition}
      />
    </AnimatePresence>
  )
}
