import  { combineReducers } from 'redux';

import ReducerUser from './ReducerUser';
import ReducerWallets from './ReducerWallets';

export default combineReducers({
    ReducerUser,
    ReducerWallets
})