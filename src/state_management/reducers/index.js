import { combineReducers } from "redux";
import signupReducer from './signup';
const rootReducers = combineReducers({
    signupUpdatedState: signupReducer 
});

export default rootReducers;