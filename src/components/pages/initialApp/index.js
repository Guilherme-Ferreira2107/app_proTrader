import React from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import Logo from '../../../assets/images/logo.png';
import Loading from '../../loading';

import {
    loadingWallet
} from '../../../store/actions';

class InitialApp extends React.Component {
    state = {
        redirect: '',
    }
    
    componentWillMount() {
        //this._loadingWallet();
        this._redirect();
    }
    /*
    _await = () => {
        setTimeout( () => {
            this.setState({
                redirect: this.props.redirect
            })
        }, 3000);
    }
    _loadingWallet = () => {
        const { loadingWallet, id } = this.props;
        setTimeout( () => {
            loadingWallet({ id })
            this._await()
        }, 3000);
    }
    */
   _redirect = () => {
    setTimeout( () => {
        this.setState({
            redirect: 'main'
        })
    }, 3000);
   }
    render(){
        const { redirect } = this.state;
        return(
            <div className="initial-app">
                <img src={Logo} alt="Logo" />

                <p>Carregando...</p>
                
                <Loading />

                {
                    this.state.redirect === 'main'
                    ? <Redirect to="/main" />
                    : null
                }

                {/*
                {
                    this.props.redirect === ''
                    ? <Redirect to="/login" />
                    : null
                }
                {
                    redirect === 'exit'
                    ? <Redirect to="/login" />
                    : <Redirect to="/" />
                }
                {
                    redirect === 'main'
                    ? <Redirect to="/main" />
                    : null
                }
                */}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    redirect: state.ReducerUser.redirect,
    id: state.ReducerUser.id,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    loadingWallet
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(InitialApp); 