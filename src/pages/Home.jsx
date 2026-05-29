import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../style/home.css"
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AddToCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

const Home = () => {

let [data, setData] = useState([])

let { id } = useParams()

let API_URL = "http://localhost:5001/data"

let dispatch = useDispatch()

const AddtoCart = (p) => {
    try {
      dispatch(AddToCart(p))
      alert("added to cart")
    }
    catch (error) {
      console.log("unable to add to cart")
    }
  }



let getdata = () => {
     
         axios.get(API_URL)
     
           .then((res) => {
             setData(res.data)
           })
     
           .catch(() => {
             console.log("something went wrong")
           })
     
       }
useEffect(() => {
    getdata()
}, [])

  return (
    <div className='home-page'>
        <search className='home-container'>
            
                {
               data.map((item) => {
                 return (
     
                   <article className='home-card' key={item.id}>
     
                     <img src={item.image} alt="" style={{ width: '50%', height: '100%' }} />

                      <div className="home-card-btn">

                      <button onClick={() => AddtoCart(data)}>
                        Add to Cart
                      </button>

              

                       </div>

     
                     

            </article>
            )
               })
             }

        </search>
      
    </div>
  )
}

export default Home
