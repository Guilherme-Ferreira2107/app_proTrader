import api from '../../services'

export const UPDATE_NAME = 'UPDATE_NAME'
export const updateName = ({ inputName }) => ({
  type: 'UPDATE_NAME',
  newName: inputName,
});

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const updateEmail = ({ inputEmail }) => ({
  type: 'UPDATE_EMAIL',
  newEmail: inputEmail,
});

export const UPDATE_PASS = 'UPDATE_PASS'
export const updatePass = ({ inputPass }) => ({
  type: 'UPDATE_PASS',
  newPass: inputPass,
});

export const CHECK_ERROR = 'CHECK_ERROR'
export const authUser = ({ inputEmail, inputPass }) => {
    return async dispatch => {
        if(inputEmail === '' || inputPass === '' ){
            return dispatch({
                type: 'CHECK_ERROR',
                message: 'Preencha corretamente os campos de e-mail e senha'
            })
        } else {
            api.post('/user/auth?email='+inputEmail+'&pass='+inputPass)
            .then(response => {
                if(response.data.message === 'Error') {
                    var erro = response.data.message;
                    authUserError(erro, dispatch);
                } else {
                    authUserSuccess(response.data, dispatch);
                }
            })
            .catch(erro => {
                authUserError(erro, dispatch);
            });
        }
    }
}

export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'
const authUserSuccess = (user, dispatch) => {
    return dispatch ({
        type: 'AUTH_USER_SUCCESS',
        user: user
    })
}

export const AUTH_USER_ERROR = 'AUTH_USER_ERROR'
const authUserError = (erro, dispatch) => {
    return dispatch ({
        type: 'AUTH_USER_ERROR',
        message: 'Seu e-mail ou senha está incorreto!'
    })
}

export const registerUser = ({ inputName, inputEmail, inputPass }) => {
    return async dispatch => {
        if( inputName === '' || inputEmail === '' || inputPass === '' ){
            return dispatch({
                type: 'CHECK_ERROR',
                message: 'Preencha corretamente todos os campos'
            })
        } else {
            await api.post('/user/create?name='+inputName+'&email='+inputEmail+'&pass='+inputPass)
            .then(response => {
                if(response.data.message === 'Success')
                    registerUserSuccess(inputEmail, dispatch);                    
                if(response.data.message === 'Error')
                    registerUserError(dispatch);
            })
        }
    }
}

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
const registerUserSuccess = (inputEmail, dispatch) => {
    return dispatch ({
        type: 'REGISTER_USER_SUCCESS',
        newEmail: inputEmail
    })
}

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'
const registerUserError = (dispatch) => {
    return dispatch ({
        type: 'REGISTER_USER_ERROR',
        message: 'Ops! Este e-mail já foi cadastrado!'
    })
}

export const recoverPass = ({ inputEmail }) => {
    return async dispatch => {
        if( inputEmail === '' ){
            return dispatch({
                type: 'CHECK_ERROR',
                message: 'Preencha corretamente o campo e-mail'
            })
        } else {
            api.post('/user?email='+inputEmail)
            .then(response => {
                if(response.data !== '')
                    recoverUserSuccess(response.data, dispatch);

                if(response.data.message === 'Error')
                    var erro = response.data.message;
                    recoverUserError(erro, dispatch);
            })
            .catch(erro => {
                recoverUserError(erro, dispatch);
            });
        }
    }
}

export const RECOVER_USER_SUCCESS = 'RECOVER_USER_SUCCESS'
const recoverUserSuccess = (pass, dispatch) => {
    return dispatch ({
        type: 'RECOVER_USER_SUCCESS',
        newPass: pass
    })
}

export const RECOVER_USER_ERROR = 'RECOVER_USER_ERROR'
const recoverUserError = (erro, dispatch) => {
    return dispatch ({
        type: 'RECOVER_USER_ERROR',
        message: 'Ops! Este e-mail ainda não foi cadastrado!'
    })
}