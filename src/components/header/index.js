import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { exit } from '../../store/actions';

import Logo from '../../assets/images/logo.png'

class Header extends Component {
    state = {
        redirect: ''
    }
    _exitApp = () => {
        const { exit } = this.props;
        this.setState({
            redirect: this.props.redirect
        })
        exit();
    } 
    render(){
        return(
            <div className="header">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="/main">
                            <img src={Logo} alt="Logo" />
                        </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><a href="/main">Home</a></li>
                            <li><a href="/calculations">Calculadora</a></li>
                            <li><a href="/performances">Performance</a></li>
                            <li><a href="/historic">Histórico</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#main">{ this.props.newEmail }</a></li>
                            <li>
                                <button className="btn-exit" onClick={this._exitApp}>
                                Exit <span className="glyphicon glyphicon-log-in"></span> 
                                </button>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    newEmail: state.ReducerUser.newEmail
})
const mapDispatchToProps = dispatch => bindActionCreators({
    exit
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Header); 