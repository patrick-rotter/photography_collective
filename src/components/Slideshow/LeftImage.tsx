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
import { transition } from './ActiveImage'
import { useWindowSize } from 'usehooks-ts'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: absolute;
  bottom: ${(props) => props.$bottom}px;
  left: ${(props) => props.$left}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`

const variants = {
  exitDown: {
    x: -300,
    y: 300,
    opacity: 0
  },
  exitUp: ({ width, height }: { width: number; height: number }) => ({
    x: width / 2 - (lPhotoWidth / 2 + padding),
    y: -(height / 2 - (lPhotoHeight / 2 + padding)),
    width: lPhotoWidth,
    height: lPhotoHeight
  })
}

export const PrevPhoto: React.FC<Photo> = (props) => {
  const { width, height } = useWindowSize()

  return (
    <AnimatePresence exitBeforeEnter custom={{ width, height }}>
      <StyledPhoto
        $bottom={padding}
        $left={padding}
        $width={sPhotoWidth}
        $height={sPhotoHeight}
        src={`./images/image0${props.id}@2x.jpg`}
        key={props.id}
        alt="Previous image"
        variants={variants}
        custom={{ width, height }}
        exit={props.exitAnimation}
        transition={transition}
        onClick={props.onPress}
      />
    </AnimatePresence>
  )
}
