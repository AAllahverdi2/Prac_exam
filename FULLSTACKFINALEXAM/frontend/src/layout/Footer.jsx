import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer__all'>
        <div className='footer__all__img'>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
            <p> Asorem ipsum adipolor <br /> sdit amet, consectetur <br />adipisicing elitcf <br /> sed do eiusmod tem.</p>
        </div>
        

        <div>
    <h3>Quick Links</h3>
   <div className='header__all__p'>
   <p>About</p>
    <p>Offers & Discounts</p>
    <p>Get Coupon</p>
    <p>Contact Us</p>
     
   </div>

        </div>


        <div  className='header__all__p'>
    <h3>New Productss</h3>
   <div>
   <p>Woman Clothes</p>
    <p>Man Clothes</p>
    <p>Get Coupon</p>
    <p>Children Clothed Us</p>
     
   </div>

        </div>



        <div>
    <h3>Support</h3>
   <div  className='header__all__p'>
   <p>Frequently Asked Questions</p>
    <p>Frequently Asked Questions & Discounts</p>
    <p>Get Frequently Asked Questions</p>
    <p>Frequently Asked Questions Us</p>
     
   </div>

        </div>
    </div>
  )
}

export default Footer
