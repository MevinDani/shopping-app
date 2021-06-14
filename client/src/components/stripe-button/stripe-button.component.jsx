import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {connect} from 'react-redux';
import { clearCartOnCheckOut } from '../../redux/cart/cart.action';


const StripeCheckoutButton = ({price,clearCartOnCheckOut}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IyD83SAAbSbcDjO7DhMravrBUQt8fkZAKhnmtCrqE1vS2OTvVFxZvjViyw0Jnj6K9QWyoqcwes0N6cHqvzsFfHX00A9HEGkVk';

    const onToken = (token) => {
        axios({
            url:'payment',
            method:'POST',
            data:{
                amount:priceForStripe,
                token
            }
        })
         .then(response => {
            alert('Payment was Successfull');
            clearCartOnCheckOut();
        }).catch(error => {
            console.log('Payment Error:',JSON.parse(error));
            alert('There was an issue with your Payment , Please make sure you use the provided TEST CREDIT CARD')
        })
     }
    return(
        <StripeCheckout
         label='Pay Now'
         name='RCT Clothing Ltd.'
         billingAddress
         shippingAddress
         description={`Your total is $${price}`}
         image='https://freesvg.org/img/lakeside_Geomertical_Pattern.png'
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartOnCheckOut:() => dispatch(clearCartOnCheckOut())
})

export default connect(null,mapDispatchToProps)(StripeCheckoutButton);