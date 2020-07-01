import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import {
    updateEmail,
    updatePass,
    authUser,
    appLoading,
} from '../../../../store/actions';
import Loading from '../../../loading';
import Logo from '../../../../assets/images/logo.png';

class Login extends Component {
    state = {
            inputEmail: '',
            inputPass: '',
            redirect: '',
            loading: false,
            message:  ''
    }
    inputChangeEmail = event => {
        this.setState({
          inputEmail: event.target.value,
        })
    }
    inputChangeSenha = event => {
        this.setState({
          inputPass: event.target.value,
        })
    }
    _authUser = async () => {
        const { inputEmail, inputPass } = this.state;
        const { authUser } = this.props;

        await authUser({ inputEmail, inputPass});

        await this.setState({ loading: true });
        await setTimeout( () => {
            this.setState({
                loading: false,
                message: this.props.message,
                redirect: this.props.redirect
            })
        }, 2000 )
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    render(){
        const { inputEmail, inputPass, loading } = this.state; 
        const {  redirect } = this.props;
        return (            
            <div className="login">        
                <section>
                    <div className="box-content">
                        <h2>Trader Wallets</h2>
                        <p>
                            Conheça o Trader Wallets, a aplicação que ajuda a controlar seus tradings de forma eficiente.<br /><br />
                            Faça cálculos rápidos e precisos com nossa calculadora de: Soros, Martingale e SorosGale.<br /><br />
                            Confira sua performance de ganhos e perdas de seus investimentos.<br /><br />
                            Controlar seu patrimônio nunca foi tão fácil. É online e gratuito!<br /><br />
                        </p><br />
                        <a href="/Register">
                            Cadastre-se agora
                        </a>
                    </div>
                    <div className="box-login">
                        <form onSubmit={this.handleSubmit}>
                            <div className="content text-center">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <h2>Sign In</h2>
                            <label>E-mail</label>
                            <input
                                placeholder="trader@gmail.com"
                                value={inputEmail}
                                onChange={this.inputChangeEmail}
                            />
                            <label>Senha</label>
                            <input
                                placeholder="Insira sua senha"
                                type="password"
                                value={inputPass} 
                                onChange={this.inputChangeSenha}
                            />
                            {
                                loading
                                ? <div className="loading"><Loading /></div>
                                : <input
                                    className="button-login"
                                    name="Login"
                                    type="submit" 
                                    value="Login"
                                    onClick={this._authUser}
                                />
                            }
                            <p className="message-erro text-center">{ this.state.message }</p>
                            { 
                                redirect === 'main'
                                ? <Redirect to="/" />
                                : null
                            }
                            <div className="box-option">
                                <a href="/Recover">Esqueceu sua senha?</a>
                                <a className="register" href="/Register">Cadastre-se agora</a>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newEmail: state.ReducerUser.newEmail,
    newPass: state.ReducerUser.newPass,
    message: state.ReducerUser.message,
    redirect: state.ReducerUser.redirect,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    appLoading,
    authUser,
    updateEmail,
    updatePass,
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Login); 