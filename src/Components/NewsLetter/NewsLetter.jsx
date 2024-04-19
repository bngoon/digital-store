import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your E-mail</h1>
        <p>Subscribe to our NewsLetter and stay updated</p>
        <div>
            <input 
            type="email"
            placeholder='Your Email Address'/>
            <button>
                Subscribe 
            </button> 
        </div>  
    </div>
  )
}

export default NewsLetter