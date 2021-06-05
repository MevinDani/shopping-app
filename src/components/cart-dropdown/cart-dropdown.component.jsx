import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))
                :
                <span className='empty-message'>YOUR CART IS EMPTY</span>
            }
        </div>
        {
            cartItems.length ?
                <CustomButton onClick={()=>{
                history.push('/checkOut');
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
            :
            null    
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));