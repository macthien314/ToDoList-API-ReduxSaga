import React from 'react';
import {useSelector} from 'react-redux'
import styleLoading from './LoadingComponent.module.css'
const LoadingComponent = () => {

    const {isLoading} = useSelector(state=>state.LoadingReducer)
    if(isLoading){
    return (
        <div className={styleLoading.bgLoading}>
           <img src={require('../assets/loading2.gif')} alt='1'/>
    </div>
    );
    }
    else {
        return''
    }
};

export default LoadingComponent;