import React from 'react'
import { Title } from './Title'
import { Link } from './Link'
import GlobalStyles from './styles/Global'
import styled from 'styled-components'
import { Slideshow } from './photos/Slideshow'

// TODO: fine tune background blur
const StyledContent = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    display: block;
    background-image: url('./images/image02.jpg');
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
`

const StyledActive = styled.div`
  width: 512px;
  height: 680px;
  border: 1px solid red;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledPrev = styled.div`
  width: 248px;
  height: 330px;
  border: 1px solid red;
  position: fixed;
  bottom: 16px;
  left: 16px;
`

const StyledNext = styled.div`
  width: 248px;
  height: 330px;
  border: 1px solid red;
  position: fixed;
  top: 16px;
  right: 16px;
`

const App: React.FC = () => {
  return (
    <StyledContent>
      <GlobalStyles />
      <Title />
      <StyledPrev />
      <StyledActive />
      <StyledNext />
      <Slideshow />
      <Link />
    </StyledContent>
  )
}

export default App
