import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../store";
import { images } from "../../fixtures/images";

const StyledLink = styled(motion.div)`
  position: absolute;
  bottom: 93px;
  right: 155px;
  font-family: Helvetica;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 120%;
  width: 109px;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #202020;
  width: 109px;
  height: 29px;
  border-radius: 16px;
  font-weight: bold;
  transition: background-color 0.15s;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const StyledDate = styled.div`
  margin: 16px 0;
  text-align: right;
`;

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const Link: React.FC = () => {
  const index = useStore((state) => state.activeIndex);
  const activeImage = images[index];
  const { author, commissionedFor, date } = activeImage;
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return (
    <AnimatePresence>
      <StyledLink
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        key={author + commissionedFor + month + year}
      >
        <motion.div>
          {author} for {commissionedFor}
        </motion.div>
        <StyledDate>
          {month} {year}
        </StyledDate>
        <StyledButton>HAVE A LOOK</StyledButton>
      </StyledLink>
    </AnimatePresence>
  );
};
