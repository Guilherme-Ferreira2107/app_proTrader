import { 
    UPDATE_VALUE_INITIAL,
    UPDATE_VALUE_CURRENT,
    UPDATE_VALUE_DEPOSITED,
    UPDATE_VALUE_WITHDRAW,

    LOADING_WALLET_SUCCESS,

    UPDATE_ORDER,
    UPDATE_PAYOUT,
    UPDATE_STOPLOSS,
    UPDATE_RETURN,
 } from '../actions';

const INITIAL_STATE = {
    valueInitial: 0,
    valueCurrent: 0,
    valueDeposited: 0,    
    valueWithdraw: 0,

    profitDaily: 0,
    profitWeekly: 0,
    profitMonthly: 0,

    newPayout: 0,
    newStoploss: 0,
    newOrder: 0,
    returnOrder: 0,
    result: 0,
}

const ReducerWallets = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_VALUE_INITIAL:
            return {
                ...state,
                valueInitial: action.payload
            }
        case UPDATE_VALUE_CURRENT:
            return {
                ...state,
                valueCurrent: action.payload
            }
        case UPDATE_VALUE_DEPOSITED:
            return {
                ...state,
                valueDeposited: action.payload
            }
        case UPDATE_VALUE_WITHDRAW:
            return {
                ...state,
                valueWithdraw: action.payload
            }
        case LOADING_WALLET_SUCCESS:
            return {
                ...state,
                valueInitial: action.userWallet[0].valueInitial,
                valueCurrent: action.userWallet[0].valueCurrent,
                valueDeposited: action.userWallet[0].valueDeposited,
                valueWithdraw: action.userWallet[0].valueWithdraw,
            }
        case UPDATE_RETURN:
            return {
                ...state,
                returnOrder: action.payload
            }    
        case UPDATE_STOPLOSS:
            return {
                ...state,
                newStoploss: action.payload
            }
        case UPDATE_ORDER:
            return {
                ...state,
                newOrder: action.newOrder,
            }
        case UPDATE_PAYOUT:
            return {
                ...state,
                newPayout: action.newPayout,
            }
        default:
            return state;
    }
}
 
export default ReducerWallets;