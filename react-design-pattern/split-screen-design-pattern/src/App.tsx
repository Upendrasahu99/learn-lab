import React from 'react'
import SplitScreen from './components/SplitScreen'
import Left from './components/Left'
import Right from './components/Right'

const App = () => {
  return (
    <>
      <SplitScreen leftWidth={20} rightWidth={80}>
        <Left/>
        <Right/>
      </SplitScreen>
    </>
  )
}

export default App