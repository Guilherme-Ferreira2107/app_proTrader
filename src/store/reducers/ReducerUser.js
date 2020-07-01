import { 
    UPDATE_NAME,
    UPDATE_PASS,
    UPDATE_EMAIL,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    CHECK_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    RECOVER_USER_SUCCESS,
    RECOVER_USER_ERROR,
    EXIT,
 } from '../actions';

const INITIAL_STATE = {
    id: '',
    loading: false,
    redirect:'',
    message: '',
    newName: '',
    newEmail: '',
    newPass: '',    
    erroRecuperaSenha:'',
    sucessoRecuperaSenha:'',
}

const ReducerUser = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case UPDATE_NAME:
            return {
                ...state,
                newName: action.newName,
            }
        case UPDATE_PASS:
            return {
                ...state,
                newPass: action.newPass
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                newEmail: action.newEmail
            }        
        case AUTH_USER_SUCCESS:
            return {
                ...state,
                redirect: 'main',
                message: '',
                id: action.user.users.user_id,
                newName: action.user.users.name,
                newEmail: action.user.users.email,
            }
        case AUTH_USER_ERROR:
            return {
                ...state,
                message: action.message
            }
        case CHECK_ERROR:
            return {
                ...state,
                message: action.message
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                newEmail: action.newEmail,
                message: '',
                redirect: 'login',
            }
        case RECOVER_USER_ERROR:
            return {
                ...state,
                newEmail: '',
                message: action.message
            }
        case RECOVER_USER_SUCCESS:
            return {
                ...state,
                newEmail: action.newEmail,
                message: '',
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                newNome: '',
                newEmail: '',
                newSenha: '', 
                message: action.message
            }
        case EXIT:
            return {
                ...state,
                redirect: 'exit'
            }
        default:
            return state;
    }
}
 
export default ReducerUser;