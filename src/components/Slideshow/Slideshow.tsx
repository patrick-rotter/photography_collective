import React from "react";
import styled from "styled-components";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { mod } from "../../util";
import { images } from "../../fixtures/images";
import { animationTimeInSec } from "../../global/constants";
import { useStore } from "../../store";
import { RightImage } from "./RightImage";
import { ActiveImage } from "./ActiveImage";
import { LeftImage } from "./LeftImage";
import { RightPlaceholder } from "./RightPlaceholder";
import { LeftPlaceholder } from "./LeftPlaceholder";

const StyledSlideshow = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Slideshow: React.FC = () => {
  const {
    activeIndex,
    setActiveIndex,
    isMovingLeft,
    setIsMovingLeft,
    setPathLength,
  } = useStore((state) => state);

  const animateCursor = () => {
    setPathLength(1);
    setTimeout(() => {
      setPathLength(0);
    }, 600);
  };

  const moveCarouselLeft = () => {
    animateCursor();
    setActiveIndex(mod(activeIndex + 1, images.length));
    setIsMovingLeft(true);
  };

  const moveCarouselRight = () => {
    animateCursor();
    setActiveIndex(mod(activeIndex - 1, images.length));
    setIsMovingLeft(false);
  };

  return (
    <ReactScrollWheelHandler
      upHandler={moveCarouselRight}
      downHandler={moveCarouselLeft}
      timeout={animationTimeInSec * 1000}
    >
      <StyledSlideshow>
        <LeftPlaceholder
          activeIndex={activeIndex}
          isMovingLeft={isMovingLeft}
        />
        <LeftImage
          activeIndex={activeIndex}
          isMovingLeft={isMovingLeft}
          onPress={moveCarouselRight}
        />
        <ActiveImage activeIndex={activeIndex} isMovingLeft={isMovingLeft} />
        <RightImage
          activeIndex={activeIndex}
          isMovingLeft={isMovingLeft}
          onPress={moveCarouselLeft}
        />
        <RightPlaceholder
          activeIndex={activeIndex}
          isMovingLeft={isMovingLeft}
        />
      </StyledSlideshow>
    </ReactScrollWheelHandler>
  );
};
