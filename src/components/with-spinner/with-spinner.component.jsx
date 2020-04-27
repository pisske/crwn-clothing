import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from  './with-spinner.style';

const WithSpinner =  WrappedComponnet =>({isLoading, ...otherProps})=>{
    return isLoading ? (
        <SpinnerOverlay>
        
         <SpinnerContainer/>
        </SpinnerOverlay>
    ):(
        <WrappedComponnet {...otherProps}/>
    )
}

export default WithSpinner;