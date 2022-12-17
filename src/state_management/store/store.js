import rootReducers from '../reducers/index'
import {configureStore} from '@reduxjs/toolkit';
const store = configureStore({
    reducer : {
        signupUpdatedState : rootReducers
    }
});
export default store;


//state.signupUpdatedState.signupUpdatedState.value