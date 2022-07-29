import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { sPhotoHeight, sPhotoWidth, padding } from '../../global/constants'
import { StyledPhotoType } from '../../global/types'
import { Photo } from '../../global/types'
import { transition } from './ActiveImage'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: fixed;
  top: ${(props) => -props.$height}px;
  right: ${(props) => -props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
  cursor: pointer;
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

export const NextNextPhoto: React.FC<Photo> = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledPhoto
        $top={padding}
        $right={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={`./images/image0${props.id}@2x.jpg`}
        key={props.id}
        alt="NextNext image"
        variants={variants}
        initial="initial"
        exit={props.exitAnimation}
        transition={transition}
      />
    </AnimatePresence>
  )
}
