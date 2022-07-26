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
  top: ${(props) => props.$top}px;
  right: ${(props) => props.$right}px;
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
    x: isMovingLeft ? -(width / 2 - (lImageWidth / 2 + padding)) : 300,
    y: isMovingLeft ? height / 2 - (lImageHeigth / 2 + padding) : -300,
    width: isMovingLeft ? lImageWidth : sImageWidth,
    height: isMovingLeft ? lImageHeigth : sImageHeight,
    opacity: isMovingLeft ? 1 : 0,
  }),
};

export const RightImage: React.FC<SlideshowImage> = (props) => {
  const { width, height } = useWindowSize();
  const { isMovingLeft } = props;
  const offset = 1;

  return (
    <AnimatePresence exitBeforeEnter custom={{ width, height, isMovingLeft }}>
      <StyledImage
        $top={padding}
        $right={padding}
        $width={sImageWidth}
        $height={sImageHeight}
        src={images[mod(props.activeIndex + offset, images.length)].url}
        key={props.activeIndex + offset}
        alt="Right image"
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
