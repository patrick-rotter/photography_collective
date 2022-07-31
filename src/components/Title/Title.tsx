import React from "react";
import styled from "styled-components";

// TODO: remove margin bottom
const StyledTitle = styled.h3`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.08em;
  margin: 16px 0 50px 16px;
`;

export const Title: React.FC = () => {
  return <StyledTitle>XYZ PHOTOGRAPHY</StyledTitle>;
};
