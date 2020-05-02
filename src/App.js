/*import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/check-out/checkout.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header-component';
import { auth, createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser} from './redux/user/user.selectors';
import {selectCollectionsForPreview} from './redux/shop/shop.selectors';


class App extends React.Component {

   
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser,collectionsArray} = this.props;
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
  if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot=>{
       
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()

          })

      });
  
    };
  
    setCurrentUser(userAuth);
    
    addCollectionAndDocuments('collections', collectionsArray.map(({title,items})=>({title,items})));
   });

  }

   componentWillUnmount(){

    this.unsubscribeFromAuth();
   }
 render(){
  return (
    <div>
    <Header/> 
    <Switch>
  <Route exact path='/' component={HomePage}/>
  <Route path='/shop' component={ShopPage}/>
  <Route exact path='/checkout' component={CheckOutPage}/>
 

  <Route exact path='/signin' 
  render={()=>
  this.props.currentUser ?(
    <Redirect to='/'/>

  ) : (
    <SignInAndSignOutPage/>
  )
  }
  />
    </Switch>
    </div>
  );
  }


}

const mapStateToProps=createStructuredSelector({
  currentUser: selectCurrentUser,
 collectionsArray: selectCollectionsForPreview
 
})

const mapDispathToProps = dispatch =>({
   setCurrentUser: user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,
  mapDispathToProps)(App);*/

 import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/check-out/checkout.component';
import Header from './components/header/header-component';


//import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
   
     const {checkUserSession} = this.props;
     checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispathToProps = disptach =>({
  checkUserSession:()=>disptach(checkUserSession())
})


export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
 


