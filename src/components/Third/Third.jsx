import React from 'react'
import './Third.css'
const Third = () => {
  return (
  <>
  <div className='third'>
  <div className='image'>
    <img src='third.PNG' />
  </div>
  <div className='third-info'>
    <h1>WHY CHOOSE US</h1>
    <div className='line'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

<div className='third-layouts'>
    <div className='f-lay'>
        <div className='fl-img'>
            <img src='setting.PNG' />
        </div>
        <div className='fl-info'>
            <h1>Easy To Customize.</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>
    </div>

        <div className='s-lay'>
        <div className='sl-img'>
            <img src='msg.PNG' />
        </div>
        <div className='sl-info'>
            <h1>24/7 Support Service</h1>
            <p>""Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Is this conversation helpful so far?."</p>
        </div>
        </div>
</div>


<div className='third-layouttt'>
    <div className='t-lay'>
        <div className='tl-img'>
            <img src='gift.PNG' />
        </div>
        <div className='tl-info'>
            <h1>Gift For Loyal Customers</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>
    </div>

        <div className='fo-lay'>
        <div className='fo-img'>
            <img src='heart.PNG' />
        </div>
        <div className='fo-info'>
            <h1>Favorite Customers</h1>
            <p>""Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Is this conversation helpful so far?."</p>
        </div>
        </div>
</div>

  </div>
  </div>
  </>
  )
}
export default Third