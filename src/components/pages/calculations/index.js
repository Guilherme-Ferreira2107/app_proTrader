import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import {
    appLoading,
} from '../../../store/actions'

import Header from '../../header';
import Footer from '../../footer';

import Soros from './soros';
import SorosGale from './sorosGale';
import Martingale from './martingale';

import PanelController from './panel'

class Calculations extends Component {
    state = {
        newName: '',
        newWallet: 0,
        message: '',
        redirect: '',
        loading: false,
    }
    render() {
        const { newName } = this.props;
        return(
            <>
            <Header />
                <div className="calculations">
                    <div className="container">
                        {
                            newName === ''
                            ? <h4>Seja bem vindo, selecione seu gerenciamento:</h4>
                            : <h4>Olá { newName }, selecione seu gerenciamento:</h4>
                        }
                    </div>
                    <br />                    
                    <Router>
                        <div className="container scene-menu text-center">
                            <Link to="/calculations/soros"><div className="scene-option"><a href="#soros">SOROS</a></div></Link>
                            <Link to="/calculations/martingale"><div className="scene-option"><a href="#martingale">MARTINGALE</a></div></Link>
                            <Link to="/calculations/sorosgale"><div className="scene-option"><a href="#sorosgale">SOROSGALE</a></div></Link>
                        </div>
                        <br />
                        <div className="container">
                            <PanelController />
                        </div>
                        <br />
                            <Switch>
                                <Route exact path="/calculations/soros">
                                    <Soros />
                                </Route>
                                <Route path="/calculations/martingale">
                                    <Martingale />
                                </Route>
                                <Route path="/calculations/sorosgale">
                                    <SorosGale />
                                </Route>
                            </Switch>
                    </Router>
                    
                    {/*
                    {
                        this.props.redirect === 'exit' ? <Redirect to="/" /> : null
                    }
                    {
                        this.props.redirect === '' ? <Redirect to="/" /> : null
                    }
                    */}
                    
                </div>
                
            <Footer />
            </>
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
)(Calculations); 