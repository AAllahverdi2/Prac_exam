import React from 'react'
import Cards from '../companents/Cards'
import ZeroSection from '../companents/ZeroSection'
import Section2 from '../companents/Section2'
import Section3 from '../companents/Section3'
import Section4 from '../companents/Section4'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
       <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
      <ZeroSection/>
      <Section2/>
        <Cards/>
        <Section3/>
        <Section4/>
      
    </div>
  )
}

export default Home
