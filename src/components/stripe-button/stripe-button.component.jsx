import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IyD83SAAbSbcDjO7DhMravrBUQt8fkZAKhnmtCrqE1vS2OTvVFxZvjViyw0Jnj6K9QWyoqcwes0N6cHqvzsFfHX00A9HEGkVk';

     const onToken = (token) => {
        console.log(token);
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


export default (StripeCheckoutButton);