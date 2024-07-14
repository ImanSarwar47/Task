import React from 'react'
import './Nine.css'
const Nine = () => {
  return (
    <>
    <div className='nine-sec'>

        {/* First Section */}
        <div className='contact'>
        <h1>CONTACT US</h1>
        <h4 className='contact-info'><img src='./nine-mob.PNG' /> +1 23 567 8596 <br />
        Support 24/7 Weekdays</h4>
        <h4 className='contact-info'><img src='./nine-loc.PNG' /> Auhandy Tower,New York,NY 10013,USA</h4>
        <h4 className='contact-info'><img src='./nine-msg.PNG' /> Info@example.com</h4>
        <h4 className='contact-info'><img src='./nine-time.PNG' /> Weekdays:09:00am-06:00pm</h4>
        </div>
        {/* First Section End */}

        {/* Second Section */}
        <div className='services'>
        <h1>OUR SERVICES</h1>
        <h3><img src='./nine-icon.PNG' /> Electrical</h3>
        <h3><img src='./nine-icon.PNG' /> Plumbing</h3>
        <h3><img src='./nine-icon.PNG' /> Engine Repair</h3>
        <h3><img src='./nine-icon.PNG' /> Repair House</h3>
        <h3><img src='./nine-icon.PNG' /> Home Maintenance</h3>
        <h3><img src='./nine-icon.PNG' /> Wall Paint</h3>
        </div>


        <div className='services'>
        <h1 className='service-head'>...</h1>
        <h3><img src='./nine-icon.PNG' /> Installation</h3>
        <h3><img src='./nine-icon.PNG' /> Garden Repairs</h3>
        <h3><img src='./nine-icon.PNG' /> Soll Drilling</h3>
        <h3><img src='./nine-icon.PNG' /> Support 24/7</h3>
        <h3><img src='./nine-icon.PNG' /> Inspection House</h3>
        <h3><img src='./nine-icon.PNG' /> Remodelling Celling</h3>
        </div>
        {/* Second Section End */}

        <div className='offer'>
        <h1>GET <span className='offer-sale'>25%</span> OFF <br /> Electrical Services</h1>
        <br /><br />
        Radeem Code:HANDYHPY28
        </div>


    </div>
    </>
  )
}

export default Nine;