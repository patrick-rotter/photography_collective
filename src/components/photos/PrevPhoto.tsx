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
import { StyledPhotoType } from '../../global/types'
import { Photo } from '../../global/types'
import { transition } from './ActivePhoto'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: absolute;
  bottom: ${(props) => props.$bottom}px;
  left: ${(props) => props.$left}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
  cursor: pointer;
`

const variants = {
  exitDown: {
    x: -300,
    y: 300,
    opacity: 0
  },
  exitUp: {
    x: window.innerWidth / 2 - (lPhotoWidth / 2 + padding),
    y: -(window.innerHeight / 2 - (lPhotoHeight / 2 + padding)),
    width: lPhotoWidth,
    height: lPhotoHeight
  }
}

export const PrevPhoto: React.FC<Photo> = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledPhoto
        $bottom={padding}
        $left={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={`./images/image0${props.id}@2x.jpg`}
        key={props.id}
        alt="Previous image"
        variants={variants}
        exit="exitDown"
        transition={transition}
        onClick={props.onPress}
      />
    </AnimatePresence>
  )
}
