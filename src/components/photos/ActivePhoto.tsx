import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import {
  lPhotoHeight,
  lPhotoWidth,
  padding,
  sPhotoWidth,
  sPhotoHeight
} from '../../global/constants'
import { StyledPhotoType } from '../../global/types'
import { Photo } from '../../global/types'
import { ImageText } from './ImageText'
import { IndicatorBar } from './IndicatorBar'

const StyledPhoto = styled(motion.img)<StyledPhotoType>`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: ${(props) => props.$marginTop}px;
  margin-left: ${(props) => props.$marginLeft}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`

// exit y: -6 is necessary for smooth docking... but why?
const variants = {
  exitDown: {
    x: -(window.innerWidth / 2 - (lPhotoWidth / 2 + padding)),
    y: window.innerHeight / 2 - 6,
    width: sPhotoWidth,
    height: sPhotoHeight
  },
  exitUp: {
    x: window.innerWidth / 2 - 6,
    y: -window.innerHeight / 2 + (lPhotoHeight / 2 + padding),
    width: sPhotoWidth,
    height: sPhotoHeight
  }
}

export const transition = {
  type: 'tween',
  duration: 1
}

// onExitComplete() from framer motion for animating in text

export const ActivePhoto: React.FC<Photo> = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledPhoto
        $marginTop={-lPhotoHeight / 2}
        $marginLeft={-lPhotoWidth / 2}
        $width={lPhotoWidth}
        $height={lPhotoHeight}
        src={`./images/image0${props.id}@2x.jpg`}
        key={props.id}
        alt="Active image"
        variants={variants}
        exit={props.exitAnimation}
        transition={transition}
      />
      <Container>
        <ImageText />
        <IndicatorBar />
      </Container>
    </AnimatePresence>
  )
}
