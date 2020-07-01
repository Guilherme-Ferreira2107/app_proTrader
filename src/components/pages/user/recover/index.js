import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import {
    updateEmail,
    recoverPass
} from '../../../../store/actions';

import Loading from '../../../loading';
import Logo from '../../../../assets/images/logo.png';

class Recover extends Component {
    state = {
        email: '',
        message: '',
        inputEmail: '',
        redirect: '',
        loading: false
    }
    inputChangeEmail = event => {
        this.setState({
          inputEmail: event.target.value,
        })
    }
    _recoverPass = async () => {
        const { inputEmail } = this.state;
        const { recoverPass } = this.props;

        await recoverPass({ inputEmail });

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
    render() {
        const { inputEmail, message, loading, redirect } = this.state;
        return(
            <div className="recover">
                 <section>
                    <div className="box-recover">
                        <form onSubmit={this.handleSubmit}>
                            <div className="content text-center">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <h2>Recuperação de senha</h2>
                            <label>Informe seu E-mail</label>
                            <input
                                placeholder="trader@gmail.com"
                                value={inputEmail}
                                onChange={this.inputChangeEmail}
                            />
                            {
                                loading
                                ? <div className="loading"><Loading /></div>
                                : <input
                                    className="button-recover"
                                    name="Recover"
                                    type="submit" 
                                    value="Recuperar Senha"
                                    onClick={this._recoverPass}
                                />
                            }
                            <p className="message-erro text-center">{ message }</p>

                            <div className="box-option">
                                <a href="/login">Já é cadastrado? <b>Entrar</b></a>
                            </div>
                        </form>
                        {
                            redirect === 'login'
                            ? <Redirect to="/login" />
                            : null
                        }
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    newEmail: state.ReducerUser.newEmail,
    message: state.ReducerUser.message,
    redirect: state.ReducerUser.redirect,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    recoverPass,
    updateEmail,
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Recover); 