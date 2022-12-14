import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/nav.css'
import getLocalStorage from './getLocalStorage';
import getOrderStorage from './getOrderStorage';
import leaf from "../assets/leaf.png";

function Nav(props) {
     const navigate  = useNavigate();
     const [foodNo, setFoodNo] = useState({cartNo : getLocalStorage(), orderNo : getOrderStorage() });

     useEffect(()=>{
          setFoodNo((value)=>{
               console.log(value)
               return {
                    ...value,
                    cartNo: getLocalStorage(),
                    orderNo : getOrderStorage()
               }
          })
     }, [props.elementName.element == "btn" || props.elementName.element == "checkout-cover" || props.elementName.element == "modalOn" ? true : false])

     return (
          <nav className='nav-bar'>
               <div className='nav-top'>
                    <div className='nav-logo-container'>
                         <img onClick={()=> navigate("/")} src={leaf} alt="" />
                         <p>Lilies</p>
                    </div>
               </div>
               <div>
                    <div  className={`nav-option ${props.elementName.state? "inactive" : "active"}`}><i className="ri-home-4-fill"></i><h3>Dashboard</h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`profile nav-option ${props.elementName.element == "profile"? "active" : "inactive"}`}><i className="ri-user-3-fill"></i><h3>Profile</h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`order nav-option ${props.elementName.element == "order"? "active" : "inactive"}`}><i className="ri-calendar-fill"></i><h3>Orders <span className={(foodNo.orderNo.length < 1) ?'order-no' : 'order-live'}>{foodNo.orderNo.length}</span></h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`cart nav-option ${props.elementName.element == "cart" ? "active" : "inactive"} `}><i className="ri-bookmark-fill"></i><h3>Your Cart <span className={(foodNo.cartNo.length < 1)?'cart-no': 'cart-live'}>{foodNo.cartNo.length}</span></h3></div>
               </div>
          </nav>
     )
}

export default Nav;