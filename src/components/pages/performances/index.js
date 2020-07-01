import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import {
    appLoading,
} from '../../../store/actions'

import Header from '../../header';
import Footer from '../../footer';

class Performances extends Component {
    state = {
        newName: '',
        newWallet: 0,
        message: '',
        redirect: '',
        loading: false,
    }
    render() {
        return(
            <>
                <Header />
                <div className="performances">
                    <div className="container">
                        <p>Performances</p>
                        
                    </div>                
                </div>
                <Footer />
            </>
        );
    }
}
const mapStateToProps = state => ({
    message: state.ReducerUser.message,
    redirect: state.ReducerUser.redirect,
    newWallet: state.ReducerWallets.newWallet,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    appLoading
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Performances); 