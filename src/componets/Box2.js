import React from 'react';
import './Box2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addWl } from '../slices/wishList';
import { addSc } from '../slices/shopCart';
import { addSp } from '../slices/shopPrices';
import {useDispatch} from 'react-redux';
function Box2(props) {
    const dispatch=useDispatch();

    const onClickButton=(props)=>{
        let finalObj= addWl(props.title)
        console.log(finalObj);
        dispatch(finalObj)
    }

    const onClickCart=(props)=>{
        let finalObj=addSc(props.title)
        console.log(finalObj);
        dispatch(finalObj)
        let finalObj1=addSp(props.price)
        console.log(finalObj1);
        dispatch(finalObj1)
    }
  return <div>
      <div className="main">
      <div className="card">
  <img src={props.image} className="card-img-top image mx-auto" alt="..."/>
  <div className="card-body">
    <p className="card-title title">{props.title}</p>
    <p className="card-text">{props.price}</p>
    <div className="row row-col-2">
    <a href="#" onClick={()=>onClickCart(props)} className="btn btn-warning text-light" style={{"width":"11rem","marginLeft":"1.8rem"}}>Cart  <FontAwesomeIcon icon={faShoppingCart} size="1x" style={{"color":"white"}}/></a>
    <a href="#"  onClick={()=>onClickButton(props)}className="btn btn-danger" style={{"width":"11rem","marginLeft":"2rem"}}>Wishlist  <FontAwesomeIcon icon={faHeart} size="1x" style={{"color":"white"}}/></a>
    </div>
  </div>
</div>
      </div>
  </div>;
}

export default Box2;
