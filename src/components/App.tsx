import React from 'react'
import { Title } from './Title'
import GlobalStyles from './styles/Global'
import { Link } from './Link'

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Title />
      <Link />
    </div>
  )
}

export default App
