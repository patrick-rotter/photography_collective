import React from 'react'
import { Title } from './Title/Title'
import { Link } from './Link/Link'
import GlobalStyles from './styles/Global'
import styled from 'styled-components'
import { Slideshow } from './Slideshow/Slideshow'
import { useStore } from '../store'
import { StyledContentType } from '../global/types'
import { CustomCursor } from './CustomCursor/CustomCursor'

const StyledContent = styled.div<StyledContentType>`
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
`

/* const StyledActive = styled.div`
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
` */

const App: React.FC = () => {
  const { url } = useStore((state) => state.activePhoto)

  return (
    <StyledContent background={url}>
      <CustomCursor />
      <GlobalStyles />
      <Title />

      <Slideshow />

      <Link />
    </StyledContent>
  )
}

export default App
