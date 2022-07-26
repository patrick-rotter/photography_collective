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

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: absolute;
  top: ${(props) => props.$top}px;
  right: ${(props) => props.$right}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
  cursor: pointer;
`

const variants = {
  exit: {
    x: -(window.innerWidth / 2 - 272),
    y: window.innerHeight / 2 - 356,
    width: lPhotoWidth,
    height: lPhotoHeight
  }
}

export const NextPhoto: React.FC<Photo> = (props) => {
  return (
    <AnimatePresence initial={false}>
      <StyledPhoto
        $top={padding}
        $right={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={`./images/image0${props.id}@2x.jpg`}
        key={props.id}
        alt="Next image"
        variants={variants}
        exit="exit"
      />
    </AnimatePresence>
  )
}
