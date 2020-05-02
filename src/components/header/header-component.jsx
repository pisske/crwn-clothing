import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/original.svg';
//import { auth } from '../../firebase/firebase.utils';
//import './header.style.scss';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCardHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.action';

const Header =({currentUser,hidden,signOutStart})=>(

         <HeaderContainer>
         
        <LogoContainer to='/'>
           <Logo className='logo'/>
        </LogoContainer>
           <OptionsContainer>
           <OptionLink to='/shop'>
             SHOP
             </OptionLink>
             <OptionLink to='/shop'>
             CONTACT
             </OptionLink>
             {
               currentUser ?(
               <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
               ):(
               <OptionLink to='/signin'>SIGN IN</OptionLink>
               )
             }
             <CartIcon/>
             </OptionsContainer>
             {
                hidden ? null :
             <CardDropdown/>
            
            }

            </HeaderContainer>

);

const mapStateToProps = createStructuredSelector ({
 currentUser:selectCurrentUser,
 hidden: selectCardHidden

});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
 });
 

export default connect(mapStateToProps,mapDispatchToProps)(Header);
