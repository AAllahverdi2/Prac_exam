import React from 'react'
import Header from '../layout/Header'
import { Outlet } from 'react-router'
import Footer from '../layout/Footer'

const MainRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default MainRoot
