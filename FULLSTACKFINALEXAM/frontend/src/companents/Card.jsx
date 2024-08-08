import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Link } from 'react-router-dom'
import "./Card.scss"
import toast, { Toaster } from 'react-hot-toast';
const Card = ({item}) => {
   const {addtoWishList,AddtoBasket,deletedata}=useContext(Maincontext)
  return (
    <div className='col-lg-4 col-md-6 mb-5 mr-2'>
        <div class="card" style={{width: "18rem;"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div className='border'></div>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.price}</p>
    <button className='btn btn-success' onClick={()=>{
        addtoWishList(item)
    }}>fav</button>
    <button className='btn btn-warning' onClick={()=>{
        AddtoBasket(item)
    }}>basket</button>
    <button className='btn btn-info' onClick={()=>{
        deletedata(item._id)
    }}>delete</button>
    <Link to={`/${item._id}`}><button className='btn btn-danger'>#</button></Link>

  </div>
</div>
      <Toaster/>
    </div>
  )
}

export default Card
