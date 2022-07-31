import React from "react";
import styled from "styled-components";
import { useStore } from "../../store";
import { images } from "../../fixtures/images";

const StyledImageText = styled.div`
  width: 860px;
  position: relative;
  font-size: 220px;
  text-transform: uppercase;
  text-align: center;
  line-height: 80%;
  letter-spacing: 0.04em;
  text-indent: 0.04em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // Filled in the middle
  &::before {
    content: attr(data-text);
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(20.27% 0, 20.27% 100%, 79.8% 100%, 79.8% 0);
  }

  // Stroked left and right
  &::after {
    content: attr(data-text);
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: white;
  }
`;

export const ImageText: React.FC = () => {
  const index = useStore((state) => state.activeIndex);

  return <StyledImageText data-text={images[index].text} />;
};
