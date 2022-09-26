import React from 'react'; 

function Header(props) {
  
  return ( 
    <header>
      <div className="container">
        <h1>{props.pizza}</h1>
      </div>
    </header>
  )
}

export default Header; 