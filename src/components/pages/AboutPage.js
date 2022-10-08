import React from 'react'
import { Link } from 'react-router-dom'; 

function AboutPage() {
  return (
    <div className= 'card'>
      <h1>Welcome to the about page!</h1>
      <p>This is my awesome about page as you can see. I'm about everything i do and don't do, and even things i've never done before! What are you about?</p>
      <Link to='/'>Home</Link>
    
    </div>
  )
}

export default AboutPage