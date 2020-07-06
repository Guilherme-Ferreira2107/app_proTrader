import api from '../../services'

export const UPDATE_VALUE_INITIAL = "UPDATE_VALUE_INITIAL";
export const updateValueInitial = value => ({
    type: UPDATE_VALUE_INITIAL,
    valueInitial: value,
});

export const UPDATE_VALUE_CURRENT = "UPDATE_VALUE_CURRENT";
export const updateValueCurrent = value => ({
    type: UPDATE_VALUE_CURRENT,
    valueCurrent: value,
});

export const UPDATE_VALUE_WITHDRAW = "UPDATE_VALUE_WITHDRAW";
export const updateValueWithdraw = value => ({
    type: UPDATE_VALUE_WITHDRAW,
    valueWithdraw: value,
});

export const UPDATE_VALUE_DEPOSITED = "UPDATE_VALUE_DEPOSITED";
export const updateValueDeposited = value => ({
    type: UPDATE_VALUE_DEPOSITED,
    valueDeposited: value,
});

export const UPDATE_ORDER = "UPDATE_ORDER";
export const updateOrder = value => ({
    type: UPDATE_ORDER,
    newOrder: value,
});

export const UPDATE_PAYOUT = "UPDATE_PAYOUT";
export const updatePayout = value => ({
    type: UPDATE_PAYOUT,
    newPayout: value
});

export const UPDATE_STOPLOSS = "UPDATE_STOPLOSS";
export const updateStoploss = value => ({
    type: UPDATE_STOPLOSS,
    newStoploss: value
});

export const UPDATE_RETURN = "UPDATE_RETURN";
export const updateReturn = value => ({
    type: UPDATE_RETURN,
    returnOrder: value,
});

export const loadingWallet = ({ id }) => {
    return async dispatch => {
        await api.post('/user/show?id='+id)
            .then(response => {
                loadingWalletSuccess(response.data, dispatch);
            })
    }
}

export const LOADING_WALLET_SUCCESS = 'LOADING_WALLET_SUCCESS'
const loadingWalletSuccess = (data, dispatch) => {
    return dispatch ({
        type: 'LOADING_WALLET_SUCCESS',
        userWallet: data
    })
}

export const UPDATE_WALLET = "UPDATE_WALLET";
export const updateWallet = ({inputValue, newWallet}) => ({
    type: 'UPDATE_WALLET',
    newWallet: parseFloat(newWallet)+parseFloat(inputValue),
});

export const UPDATE_PROFIT = "UPDATE_PROFIT";
export const updateProfit = ({inputValue, newProfit}) => ({
    type: 'UPDATE_PROFIT',
    newProfit: parseFloat(inputValue) + parseFloat(newProfit)
});