import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import {
  sImageHeight,
  sImageWidth,
  lImageHeigth,
  lImageWidth,
  padding,
} from "../../global/constants";
import { SlideshowImage, StyledImageType } from "../../global/types";
import { images } from "../../fixtures/images";
import { mod } from "../../util";
import { transition } from "./ActiveImage";

const StyledImage = styled(motion.img)<StyledImageType>`
  position: absolute;
  bottom: ${(props) => props.$bottom}px;
  left: ${(props) => props.$left}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`;

const variants = {
  initial: { opacity: 1 },
  exit: ({
    width,
    height,
    isMovingLeft,
  }: {
    width: number;
    height: number;
    isMovingLeft: boolean;
  }) => ({
    x: isMovingLeft ? -300 : width / 2 - (lImageWidth / 2 + padding),
    y: isMovingLeft ? 300 : -(height / 2 - (lImageHeigth / 2 + padding)),
    width: isMovingLeft ? sImageWidth : lImageWidth,
    height: isMovingLeft ? sImageHeight : lImageHeigth,
    opacity: isMovingLeft ? 0 : 1,
  }),
};

export const LeftImage: React.FC<SlideshowImage> = (props) => {
  const { width, height } = useWindowSize();
  const { isMovingLeft } = props;
  const offset = -1;

  return (
    <AnimatePresence exitBeforeEnter custom={{ width, height, isMovingLeft }}>
      <StyledImage
        $bottom={padding}
        $left={padding}
        $width={sImageWidth}
        $height={sImageHeight}
        src={images[mod(props.activeIndex + offset, images.length)].url}
        key={props.activeIndex + offset}
        alt="Left Image"
        variants={variants}
        custom={{ width, height, isMovingLeft }}
        initial="initial"
        exit="exit"
        transition={transition}
        onClick={props.onPress}
        whileHover={{
          scale: 1.01,
          transition: {
            duration: 0.1,
          },
        }}
      />
    </AnimatePresence>
  );
};
