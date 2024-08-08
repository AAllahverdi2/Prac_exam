import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import ROUTES from './index.routes'
import ROUTES from './index.routes';
import axios from 'axios'
import Maincontext from './Context/context';
import toast from 'react-hot-toast';
const router=createBrowserRouter(ROUTES)
const App = () => {
  const[data,setData]=useState([])
  const [wishList,setWishList]=useState(localStorage.getItem("wish")?JSON.parse(localStorage.getItem("wish")):[])
  const [basket,setbasket]=useState(localStorage.getItem("BasketItem")?JSON.parse(localStorage.getItem("BasketItem")):[])
const[search,setSearch]=useState([])

  const addtoWishList=(product)=>{
  const target=wishList.find(item=>item._id==product._id)
  if(target){
    toast.error("wishListinizde Movcuddur")
  }
  else{
    setWishList([...wishList,product])
    localStorage.setItem("wish",JSON.stringify([...wishList,product]))
    toast.success("added to wishList")
  }

}
const removeFromWishList=(product)=>{
  const target=wishList.find(item=>item._id==product._id)
  wishList.splice(wishList.indexOf(target),1)
  setWishList([...wishList])
  localStorage.setItem("wish",JSON.stringify([...wishList]))
  toast.success("deleted data")

}
const removeFromBaskewt=(product)=>{
  const target=basket.find(item=>item._id==product._id)
  basket.splice(basket.indexOf(target),1)
  setbasket([...basket])
  localStorage.setItem("BasketItem",JSON.stringify([...basket]))
  toast.success("deleted data")

}

const HAndlerSorty=(e)=>{
  const sorting=e.target.value
  if(sorting=="df"){
    setData([...search])
  }
  else if(sorting=="09"){
    const target=data.sort((a,b)=>a.price-b.price)
    setData([...target])
  }
  else if(sorting=="90"){
    const target=data.sort((a,b)=>b.price-a.price)
    setData([...target])
  }
  else if(sorting=="az"){
    const target=data.sort((a,b)=>a.name.localeCompare(b.name))
    setData([...target])
  }
  else if(sorting=="za"){
    const target=data.sort((a,b)=>b.name.localeCompare(a.name))
  }
}
const HanderSearch=(searchValue)=>{
  if(searchValue==''){
    setData([...search])
  }
  else{
    setData([...search.filter((item)=>item.name.toLowerCase().trim().includes(searchValue))])
  }
}
const AddtoBasket=(product)=>{
  const target=basket.find(item=>item.product._id==product._id)
  if(target){
    target.count +=1
    target.totalPrice=target.product.price*target.count
    setbasket([...basket])
    localStorage.setItem("BasketItem",JSON.stringify([...basket]))
    toast.success("added to basket")
  }
  else{
    const BasketProduct={
      id: product._id,
      product:product,
      count:1,
      totalPrice:product.price

    }
    setbasket([...basket,BasketProduct])
    localStorage.setItem("BasketItem",JSON.stringify([...basket,BasketProduct]))
    toast.success("added to basket")
  }
}
const decreaseBtn=(product)=>{
  const target=basket.find(item=>item.id==product.id)
  if(target.count>1){
    target.count -=1
    target.totalPrice=target.product.price*target.count
    setbasket([...basket])
    localStorage.setItem("BasketItem",JSON.stringify([...basket]))
  }
}

const increase=(product)=>{
  const target=basket.find(item=>item.id==product.id)
  
    target.count +=1
    target.totalPrice=target.product.price*target.count
    setbasket([...basket])
    localStorage.setItem("BasketItem",JSON.stringify([...basket]))
  
}
const deletedata=(id)=>{
  axios.delete(`http://localhost:7009/timezone/${id}`).then(res=>{
    const target=data.find(item=>item._id==id)
    data.splice(data.indexOf(target),1)
    setData([...data])
    toast.success("deleted data")
  })
}




  useEffect(()=>{
axios.get("http://localhost:7009/timezone/").then(res=>{
console.log(res.data)
setData(res.data)
setSearch(res.data)
})
},[])
const values={
  data,
  addtoWishList,
  wishList,
  removeFromWishList,
  AddtoBasket
  ,setData,
  deletedata,
  HanderSearch,HAndlerSorty,
  setSearch,
  search,
  basket,
  decreaseBtn,
  increase,
  removeFromBaskewt
  
}

  return (
    <div>
      <Maincontext.Provider value={values} >
          <RouterProvider router={router}/>
      </Maincontext.Provider>
    
      
    </div>
  )
}

export default App

