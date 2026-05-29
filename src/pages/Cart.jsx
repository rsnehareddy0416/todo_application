import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromCart } from '../redux/CartSlice'

const Cart = () => {

  let cartData = useSelector((x) => x.cart.cart)

  let dispatch = useDispatch()

  
  const removeItem = (id) => {
    dispatch(RemoveFromCart(id))
  }

  return (

    <div className="cart-page" style={{ backgroundColor: "black", height: "100vh" }}>

      <h1 style={{ color: "white" }}>Cart Products</h1>

      <div className="cart-container" >

        {
          cartData.map((item) => {

            
            return (

              <article className="cart-card" key={item.id}
                style={{ backgroundColor: "white", height: "50%", width: "20%" }}>

                <img
                  src={item.image}
                  alt=""
                  style={{ height: "200px", width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}
                />

                <div className="cart-card-info">

                  


                  <div className="cart-card-btn">

                    <button onClick={() => removeItem(item.id)}>
                      Remove
                    </button>

                  </div>

                </div>

              </article>

            )
          })
        }

      </div>

    </div>
  )
}

export default Cart