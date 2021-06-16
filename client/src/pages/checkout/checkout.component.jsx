import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const checkUserAndTotal = (currentUser,total) => {
    if (currentUser && total > 0) {
        return <StripeCheckoutButton price={total}/>
    } else if(!currentUser) {
        return <div className='signin-warning'>
            YOU MUST BE SIGNED IN FOR PAYMENTS!
        </div>
    } else if(!total) {
        return <div className='signin-warning'>
            YOU MUST PURCHASE ITEMS FIRST!
        </div>
    }
}
    

const CheckOutPage = ({cartItems,total,currentUser}) => {
    return(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Name</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
            {cartItems.map(item=><CheckoutItem key={item.id} cartItem={item}/>)}
            <div className='total'>
                  <span>TOTAL:${total}</span>  
            </div>
            <div className='test-warning'>
                **Please use the following test credit card for payments**
                <br />
                [4242 4242 4242 4242 - Exp:6/25 - CVV:123]
            </div>
            { 
             checkUserAndTotal(currentUser,total)
            }
            
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartItemsTotal,
    currentUser:selectCurrentUser
})


export default connect(mapStateToProps)(CheckOutPage);