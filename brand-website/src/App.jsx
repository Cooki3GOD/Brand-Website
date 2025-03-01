import React from 'react'

const App = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="../public/images/logo.png" alt="logo" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="login">
          <button className='login'>login</button>
        </div>
      </nav>
    </header>
  )
}

export default App
