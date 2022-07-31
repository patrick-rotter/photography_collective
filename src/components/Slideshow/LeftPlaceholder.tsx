import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { sImageHeight, sImageWidth, padding } from "../../global/constants";
import { SlideshowImage, StyledImageType } from "../../global/types";
import { images } from "../../fixtures/images";
import { mod } from "../../util";
import { transition } from "./ActiveImage";

const StyledImage = styled(motion.img)<StyledImageType>`
  position: fixed;
  bottom: ${(props) => -props.$height}px;
  left: ${(props) => -props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`;

const variants = {
  initial: { opacity: 0 },
  exit: ({ isMovingLeft }: { isMovingLeft: boolean }) => ({
    x: isMovingLeft ? -300 : sImageWidth + padding,
    y: isMovingLeft ? 300 : -(sImageHeight + padding),
    opacity: isMovingLeft ? 0 : 1,
  }),
};

export const LeftPlaceholder: React.FC<SlideshowImage> = (props) => {
  const { isMovingLeft } = props;
  const offset = -2;

  return (
    <AnimatePresence exitBeforeEnter custom={{ isMovingLeft }}>
      <StyledImage
        $bottom={padding}
        $left={padding}
        $width={sImageWidth}
        $height={sImageHeight}
        src={images[mod(props.activeIndex + offset, images.length)].url}
        key={props.activeIndex + offset}
        alt="Left Placeholder"
        variants={variants}
        custom={{ isMovingLeft }}
        initial="initial"
        exit="exit"
        transition={transition}
      />
    </AnimatePresence>
  );
};
