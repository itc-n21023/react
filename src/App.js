import React, { useState } from 'react'
const ButtonComponent = props => {
  const [text, setText] = useState('Click me')
  const f = event => setText('Clicked')
  return (
    <button
      onClick={f}
    >
      {text}
    </button>
  )
}

const App = props => {
  const [text, setText] = useState('Click me')
  const handleClick = event => setText('Clicked')
  return (
    <>
      <ButtonComponent
        text={text} handleClick={handleClick}
      />
    </>
  )
}

export default App
