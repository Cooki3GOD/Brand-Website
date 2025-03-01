import React from 'react'

const App = () => {
  return (
    <div className="container">
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
      <main>
        <div className="left">
          <h1>
            YOUR FEET
            <br />
            DESERVE
            <br />
            THE BEST
          </h1>
          <h3>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h3>
          <div className="buttons">
              <button className="shop-now">Shop Now</button>
              <button className="category">Category</button>
          </div>
        </div>
        <div className="right">
          <img src="../public/images/shoe.png" alt="shoe" />
        </div>
      </main>
    </div>
  )
}

export default App
