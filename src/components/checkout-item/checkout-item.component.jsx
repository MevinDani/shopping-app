import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({cartItem,clearItem,addItem,removeItem}) => {
    const{name,quantity,price,imageUrl} = cartItem;
    return(
   <div className='checkout-item'>
        <div  className='image-container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10006;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem:items => dispatch(clearItemFromCart(items)),
    addItem:items => dispatch(addItem(items)),
    removeItem:items => dispatch(removeItem(items))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);