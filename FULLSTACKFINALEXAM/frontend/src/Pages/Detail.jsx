import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.scss"
import {Helmet} from "react-helmet";
const Detail = () => {
    const [detail,setdetail]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:7009/timezone/${id}`).then(res=>{
            setdetail(res.data)
        })
    })
  return (
    <div className='detail'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Detail Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
      <div className='detail.all'>
        <img src={detail.image} alt="" />
        <p>{detail.name}</p>
        <p>{detail.price}</p>
      
    </div>
    </div>
  )
}

export default Detail
