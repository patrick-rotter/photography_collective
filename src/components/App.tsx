import React from "react";
import styled from "styled-components";
import { StyledContentType } from "../global/types";
import { useStore } from "../store";
import { images } from "../fixtures/images";
import { Title } from "./Title/Title";
import { Link } from "./Link/Link";
import { GlobalStyles } from "./styles/Global";
import { Slideshow } from "./Slideshow/Slideshow";
import { CustomCursor } from "./CustomCursor/CustomCursor";

const StyledContent = styled.div<StyledContentType>`
  position: relative;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: block;
    background: url(${(props) => props.background});
    -webkit-transition: background-image 0.5s ease-in-out;
    transition: background-image 0.5s ease-in-out;
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter: blur(100px);
    margin: -110px;
  }
`;

export const App: React.FC = () => {
  const index = useStore((state) => state.activeIndex);

  return (
    <StyledContent background={images[index].url}>
      <CustomCursor />
      <GlobalStyles />
      <Title />
      <Slideshow />
      <Link />
    </StyledContent>
  );
};
