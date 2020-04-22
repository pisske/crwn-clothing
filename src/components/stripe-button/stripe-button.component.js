import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckOutButton =({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_IrsUe63Y4mstRbcXtoEMGPLG00kefkJi4K';


    const onToken =token=>{
        console.log(token);
        alert('Payment Successful');
    }
return(
    <StripeCheckout 
    label='Pay Now'
    name = 'Vlad Shop Ltd.'
    billingAddress
    shipingAddress
    image='https://sendeyo.com/up/d/f3eb2117da'
    description={`Your total is $${price}`}
    amout={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    striperKey={publishableKey}

    />

);


   

}

export default StripeCheckOutButton;


