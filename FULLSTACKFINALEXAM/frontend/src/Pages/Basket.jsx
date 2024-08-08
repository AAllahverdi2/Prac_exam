import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Toaster } from 'react-hot-toast'
import {Helmet} from "react-helmet";

const Basket = () => {
    const {basket,decreaseBtn,increase,removeFromBaskewt}=useContext(Maincontext)
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Basket Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">decrease</th>
      <th scope="col">count</th>
      <th scope="col">increase</th>
      <th scope="col">totalPrice</th>
      <th scope="col">delete</th>

    </tr>
  </thead>
  <tbody>
    {
        basket.map((item,index)=>{
            return(
             
                 <tr>
                <th scope="col">{item.product.name}</th>
                <th scope="col">{item.product.price}</th>
                <th scope="col"><button className='btn btn-warning' onClick={()=>{
                    decreaseBtn(item)
                }}>decrease</button></th>
                <th scope="col">{item.count}</th>
                <th scope="col"><button className='btn btn-danger' onClick={()=>{
                    increase(item)
                }}>increase</button></th>
                <th scope="col">{item.totalPrice}</th>
                <th scope="col"><button className='btn btn-success' onClick={()=>{
                    removeFromBaskewt(item)
                }}>delete</button></th>
              </tr>
            
            )
        })
    }
  </tbody>
  </table>
      <Toaster/>
    </div>
  )
}

export default Basket
