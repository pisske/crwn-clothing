import React from 'react';
import './checkout.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems,  selectCartTotal } from '../../redux/cart/cart.selectors';


/*const CheckOutPage =(cartItems, total)=>(

   <div className='checkout-page'>
     <div className='checkout-header'>
         <div className='header-block'>
            <span>Product</span>
         </div>
         <div className='header-block'>
            <span>Description</span>
         </div>
         <div className='header-block'>
            <span>Quantity</span>
         </div>
         <div className='header-block'>
            <span>Price</span>
         </div>
         <div className='header-block'>
          
         </div>
    </div>

      {cartItems.map(cartItem=>cartItem.name)}
      <div className='total'>
      <span>TOTAL: ${total}</span>
      </div>
     </div>

);

const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);*/


const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
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
   
      {cartItems.map(cartItem=>(
          <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
      ))}
      <div className='total'>TOTAL: ${total}</div>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  });
  
  export default connect(mapStateToProps)(CheckoutPage);