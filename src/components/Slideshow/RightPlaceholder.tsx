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
  top: ${(props) => -props.$height}px;
  right: ${(props) => -props.$width}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 10px;
  border: 1px solid #000000;
`;

const variants = {
  initial: { opacity: 0 },
  exit: ({ isMovingLeft }: { isMovingLeft: boolean }) => ({
    x: isMovingLeft ? -(sImageWidth + padding) : 300,
    y: isMovingLeft ? sImageHeight + padding : -300,
    opacity: isMovingLeft ? 1 : 0,
  }),
};

export const RightPlaceholder: React.FC<SlideshowImage> = (props) => {
  const { isMovingLeft } = props;
  const offset = 2;

  return (
    <AnimatePresence exitBeforeEnter custom={{ isMovingLeft }}>
      <StyledImage
        $top={padding}
        $right={padding}
        $width={sImageWidth}
        $height={sImageHeight}
        src={images[mod(props.activeIndex + offset, images.length)].url}
        key={props.activeIndex + offset}
        alt="Right Placeholder"
        variants={variants}
        custom={{ isMovingLeft }}
        initial="initial"
        exit="exit"
        transition={transition}
      />
    </AnimatePresence>
  );
};
