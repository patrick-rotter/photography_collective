import React from 'react'
import { Title } from './Title'
import GlobalStyles from './styles/Global'
import styled from 'styled-components'
import { Link } from './Link'

// TODO: fine tune background blur
const StyledContent = styled.div`
  position: fixed;
  padding: 16px;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 0;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    display: block;
    background-image: url('./images/image01.jpg');
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

const App: React.FC = () => {
  return (
    <StyledContent>
      <GlobalStyles />
      <Title />
      <Link />
    </StyledContent>
  )
}

export default App
