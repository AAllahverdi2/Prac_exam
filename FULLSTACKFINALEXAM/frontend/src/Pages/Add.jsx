import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Maincontext from '../Context/context';
import "./Add.scss"
import { Toaster } from 'react-hot-toast';
import {Helmet} from "react-helmet";

const Add = () => {
    const {data,setData,search,setSearch,deletedata,HanderSearch,HAndlerSorty}=useContext(Maincontext)
    const formik = useFormik({
        initialValues: {
          name: '',
          desc: '',
          image: '',
          price:''
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          desc: Yup.string()
            
            .required('Required'),
            image: Yup.string()
            
            .required('Required'),
            price: Yup.string()
            
            .required('Required'),
         
        }),
        onSubmit: values => {
        axios.post("http://localhost:7009/timezone/",values).then(res=>{
            setData([...data,res.data])
            setSearch([...search,res.data])
        })
        formik.resetForm()
        },
      });
  return (
    <div className='add'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        <div className='formikyup'>
        <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name"><b>Name</b>   </label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
       />
       {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
 
       <label htmlFor="desc"> <b>Description</b></label>
       <input
         id="desc"
         name="desc"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.desc}
       />
       {formik.touched.desc && formik.errors.desc ? (
         <div>{formik.errors.desc}</div>
       ) : null}
 
       <label htmlFor="image"><b>Image</b></label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}

<label htmlFor="price"><b>Price</b></label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
       />
       {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
 
       <button className='btn btn-secondary' type="submit">Submit</button>
     </form>
      
        </div>
        <div className='admin__data'>
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
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">descripion</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
        {
            data.map((item,index)=>{
              return(
                <tr>
                <th scope="row">{item._id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td><button onClick={()=>{
                  deletedata(item._id)
                }} className='btn btn-info'>delete</button></td>
              </tr>
               
              )
            })
          }
        </tbody>
  </table>
      
        </div>
        <Toaster/>
    </div>
  )
}

export default Add
