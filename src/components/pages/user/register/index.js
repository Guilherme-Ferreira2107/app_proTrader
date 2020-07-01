import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';

import {
    updateName,
    updateEmail,
    updatePass,
    appLoading,
    registerUser
} from '../../../../store/actions'

import Loading from '../../../loading';
import IconCheck from '../../../../assets/icons/checkmark.png';

class Register extends Component {
    state = {
        inputName: '',
        inputEmail: '',
        inputPass: '',
        message: '',
        loading: false
    }
    inputChangeName = event => {
        this.setState({
            inputName: event.target.value,
        })
    }
    inputChangeEmail = event => {
        this.setState({
            inputEmail: event.target.value,
        })
    }
    inputChangePass = event => {
        this.setState({
            inputPass: event.target.value,
        })
    }
    _registerUser = async () => {
        const { inputName, inputEmail, inputPass } = this.state;
        const { registerUser } = this.props;
        
        await registerUser({ inputName, inputEmail, inputPass });

        await this.setState({ loading: true });
        await setTimeout( () => {
            this.setState({
                loading: false,
                message: this.props.message
            })
        }, 2000 )
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    render() {
        const { inputName, inputEmail, inputPass, loading } = this.state; 
        const {  redirect } = this.props;
        return(
            <div className="register">        
                <section>
                    <div className="box-register">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Crie sua conta</h2><br />
                            <label>Nome</label>
                            <input
                                placeholder="Insira seu nome"
                                value={inputName}
                                onChange={this.inputChangeName}
                            />
                            <label>E-mail</label>
                            <input
                                placeholder="trader@gmail.com"
                                value={inputEmail}
                                onChange={this.inputChangeEmail}
                            />
                            <label>Senha</label>
                            <input
                                placeholder="Crie uma senha"
                                type="password"
                                value={inputPass} 
                                onChange={this.inputChangePass}
                            />
                            {
                                loading
                                ? <div className="loading"><Loading /></div>
                                : <input
                                    className="button-register"
                                    name="register"
                                    type="submit" 
                                    value="Cadastrar"
                                    onClick={this._registerUser}
                                />
                            }
                            <p className="message-erro text-center">{ this.state.message }</p>
                            { 
                                redirect === 'main'
                                ? <Redirect to="/" />
                                : null
                            }
                            <div className="box-option">
                                <a href="/Login">Já é cadastrado? <b>Entrar</b></a>
                            </div>
                        </form>
                    </div>
                    <div className="box-content">
                        <h2>Trader Wallets</h2><br />
                        <div className="plan">
                        <h4>Assine nosso plano e aproveite à todos os benefícios</h4><br />                        
                        <p><img src={IconCheck} alt="Icon" width="25" /> Acesso ilimitado ao recursos de cálculos</p>

                        <p><img src={IconCheck} alt="Icon" width="25" /> Acesso ilimitado à quantidade de ordens</p>

                        <p><img src={IconCheck} alt="Icon" width="25" /> Histórico completo de suas ordens</p>

                        <p><img src={IconCheck} alt="Icon" width="25" /> Acesso à todas as funções do Gráfico de Desempenho</p>

                        <p><img src={IconCheck} alt="Icon" width="25" /> Participações de sorteios e brindes</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    newName: state.ReducerUser.newName,
    newEmail: state.ReducerUser.newEmail,
    newPass: state.ReducerUser.newPass,
    message: state.ReducerUser.message,
    redirect: state.ReducerUser.redirect,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    appLoading,
    updateName,
    updateEmail,
    updatePass,
    registerUser
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Register);