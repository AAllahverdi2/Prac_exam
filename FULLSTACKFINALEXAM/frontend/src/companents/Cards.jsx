import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import Card from './Card'
import "./Card.scss"
const Cards = () => {
    const {data,HanderSearch,HAndlerSorty}=useContext(Maincontext)
    console.log("object",data)
  return (
    <div>
        <div className="container">
            <div className='container__text'>
                <h2>Popular Items</h2>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <input type="text" placeholder='search' onChange={(e)=>{
                    HanderSearch(e.target.value)
                }}/>
                <select name="" id="" onChange={(e)=>{
                        HAndlerSorty(e)
                }}>
<option value="df">defiult</option>
<option value="09">09</option>
<option value="90">90</option>
<option value="az">az</option>
<option value="za">za</option>

                </select>
            </div>
            <div className="row">
                {
                    data.map((item,index)=>{
                        return(<Card item={item} key={index} />)
                    })
                }
            </div>
        </div>
        
      
    </div>
  )
}

export default Cards
