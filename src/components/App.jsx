import React, { useState } from 'react'

const App = () => {
  const [isOpen, changeIsOpen] = useState(false)

  return (
    <div className="code-guides-app">
      <h1>Code Guides App</h1>
      <button onClick={() => changeIsOpen(!isOpen)}>
        {isOpen ? 'Hide current year' : 'Show current year'}
      </button>
      {isOpen && <h2>{new Date().getFullYear()}</h2>}
    </div>
  )
}

export default App