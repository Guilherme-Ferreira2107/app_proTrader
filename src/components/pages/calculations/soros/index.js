import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    appLoading,
} from '../../../../store/actions'

class Soros extends Component {
    state = {
        newName: '',
        newWallet: 0,
        message: '',
        redirect: '',
        loading: false,
    }
    render() {
        return(
            <div className="soros">
                <div className="container">
                    soros                      
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newName: state.ReducerUser.newName,
    message: state.ReducerUser.message,
    redirect: state.ReducerUser.redirect,
    newWallet: state.ReducerWallets.newWallet,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    appLoading
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Soros); 