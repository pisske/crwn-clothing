import React from 'react';
//import {connect} from 'react-redux';
//import {createStructuredSelector} from 'reselect';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';
//import { selectCollections} from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { Route } from 'react-router-dom';

const  ShopPage =({match})=> (
   
    
            <div className='shop-page'>

        <Route exact path={`${match.path}`}  component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        
);

    

export default ShopPage; 


