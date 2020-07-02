import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import {
    updateValueInitial,
    updateValueCurrent,
    updateValueDeposited,
    updateValueWithdraw,
} from '../../../store/actions'

import Header from '../../header';
import Footer from '../../footer';

class Main extends Component {
    state = {
        message: '',
        redirect: '',
        loading: false,
    }
    render() {
        const { 
            newName, 
            valueCurrent, 
            valueInitial,
            profitDaily,
            profitWeekly,
            profitMonthly  
        } = this.props;
        return(
            <>
                <Header />
                <div className="main">
                    <div className="container">
                        <h4>Olá <em>{ newName }</em>, seja bem vindo ao seu Trading System!</h4>
                    </div>
                    
                    <div className="container exhibit">
                        <div className="col-sm-4">
                            <h2>Saldo disponível: </h2>
                            <h2>R$ { valueCurrent }</h2>
                        </div>
                        <div className="col-sm-8">
                            <div className="col-sm-4">
                                <label>Saldo Inicial</label>
                                <h4>R${ valueInitial } </h4>                            
                            </div>
                            <div className="col-sm-8">
                                <label>Lucro Total</label>
                                <h4>R${ null } </h4>                            
                            </div>
                            <div className="col-sm-4">                            
                                <label>Lucro Diário</label>
                                <h4>R${ profitDaily } </h4>
                            </div>
                            <div className="col-sm-4">
                                <label>Lucro Semanal</label>
                                <h4>R${ profitWeekly } </h4>
                            </div>
                            <div className="col-sm-4">
                                <label>Lucro Mensal</label>
                                <h4>R${ profitMonthly } </h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container update-wallet">
                    <h4>Preencha os campos abaixo para atualizar sua carteira</h4>
                    <br />
                    <div className="container">
                        <div className="container col-sm-6">
                            <form className="form-inline">
                                <div className="input-group">
                                    <span class="input-group-addon">R$</span>
                                    <input 
                                        type="number" 
                                        className="form-control"
                                        placeholder="1.000,00"
                                        />
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-success">Deposite</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="container col-sm-6">
                            <form className="form-inline">
                                <div className="input-group">
                                    <span class="input-group-addon">R$</span>
                                    <input 
                                        type="number" 
                                        className="form-control"
                                        placeholder="1.000,00"
                                        />
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-danger">Saque</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>                   
                </div>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => ({
    newName: state.ReducerUser.newName,
    newEmail: state.ReducerUser.newEmail,
    id: state.ReducerUser.id,
    message: state.ReducerUser.message,
    redirect: state.ReducerUser.redirect,

    valueInitial: state.ReducerWallets.valueInitial,
    valueCurrent: state.ReducerWallets.valueCurrent,
    valueDeposited: state.ReducerWallets.valueDeposited,
    valueWithdraw: state.ReducerWallets.valueWithdraw,

    profitDaily: state.ReducerWallets.profitDaily,
    profitWeekly: state.ReducerWallets.profitWeekly,
    profitMonthly: state.ReducerWallets.profitMonthly,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    updateValueInitial,
    updateValueCurrent,
    updateValueDeposited,
    updateValueWithdraw,
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Main); 