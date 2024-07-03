import {configureStore} from  '@reduxjs/toolkit';
import  counterReducer  from  './counterslise';

export const store = configureStore({
 reducer:{
    counter: counterReducer
 }

})
