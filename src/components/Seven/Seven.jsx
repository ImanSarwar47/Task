import React from 'react'
import './Seven.css'
const Seven = () => {
  return (
    <>
    <div className='sev-sec'>

    <div className='seven-first'>
    <div className='seven-info'>
        <h1>OUR LOCATION</h1>
        <h1 className='seven-line'></h1>
    </div>
    <div className='seven-map'>
    <img src='./seven.PNG'/>
    </div>
    </div>

    <div className='seven-second'>
    <div className='sec-info'>
        <h1>GET A QUOTE</h1>
        <h1 className='seven-line'></h1>
    </div>
    <div className='seven-form'>
    <input className='sev-input' type='text' placeholder='Your Name' />
    <input className='sev-input' type='email' placeholder='Your Email'/>
    <br />
    <input className='sev-input' type='text'  placeholder='Your Subjects'/>
    <input className='sev-input' type='number'  placeholder='Your Phone Number'/>
    <br />
    <textarea className='sev-input' rows={8} cols={43} placeholder='Description Services Needed'></textarea>
    <br />
    <button>Submit</button>
    </div>
    </div>

    </div>
    </>
  )
}

export default Seven;