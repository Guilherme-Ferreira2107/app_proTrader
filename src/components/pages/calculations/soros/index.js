import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    updateWallet,
    updateProfit
} from '../../../../store/actions'

class Soros extends Component {
    state = {
        currentTime: new Date().toLocaleString()
    }
    copyValue = (text) => {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
            window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
        }
        document.body.removeChild(textArea);
    }
    return(){
        let temp = parseFloat(this.props.newOrder) * parseFloat(this.props.newPayout/100);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return2(){
        let temp = parseFloat(this.order2()) * parseFloat(this.props.newPayout/100);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return3(){  
        let temp = parseFloat(this.order3()) * parseFloat(this.props.newPayout/100);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return4(){  
        let temp = parseFloat(this.order4()) * parseFloat(this.props.newPayout/100);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return5(){  
        let temp = parseFloat(this.order5()) * parseFloat(this.props.newPayout/100);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    order2(){
        let temp = parseFloat(this.props.newOrder) + parseFloat(this.props.newOrder * this.props.newPayout) / 100;
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    order3(){
        let order = this.order2();
        let rtn = this.return2();
        var temp = order + rtn;
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    order4(){
        let order = this.order3();
        let rtn = this.return3();
        var temp = order + rtn;
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    order5(){
        let order = this.order4();
        let rtn = this.return4();
        var temp = order + rtn;
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    _Win = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = this.return();        
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    _Loss = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet, newOrder } = this.props;
        let inputValue = -newOrder;
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    _Win2 = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = this.return2();
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    _Loss2 = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = -this.order2();
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    _Win3 = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = this.return3();
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    _Loss3 = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = -this.order3();
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    _Win4 = async () => {
            const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
            let inputValue = this.return4();
            await updateWallet({ inputValue, newWallet });
            await updateProfit({ inputValue, newProfit });
    }
    _Loss4 = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = -this.order4();
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    _Win5 = async () => {
            const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
            let inputValue = this.return5();
            await updateWallet({ inputValue, newWallet });
            await updateProfit({ inputValue, newProfit });
    }
    _Loss5 = async () => {
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = -this.order5();
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    render() {
        return(            
            <div className="soros">
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td> </td>
                                <td className="">
                                    <p>1° Ordem</p>
                                </td>
                                <td className="">
                                    <p>Retorno</p>
                                </td>
                                <td className="result">
                                    <p>Resultado</p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="">
                                <p>1° Nível</p>
                            </td>
                            <td><div className="field">
                                R$ { this.props.newOrder }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.props.newOrder)} />
                                </div></td>
                            <td><div className="field">
                                    R$ { this.return() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.return())} />
                                </div></td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss} />
                                </div></td>
                        </tr>
                        <tr>
                            <td className="">
                            <p>2° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.order2() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.order2())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return2() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.return2())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win2} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss2} />
                                </div></td>
                        </tr>
                        <tr>
                            <td className="">
                            <p>3° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.order3() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.order3())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return3() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.return3())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win3} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss3} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="">
                            <p>4° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.order4() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.order4())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return4() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.return4())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win4} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss4} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="">
                            <p>5° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.order5() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.order5())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return5() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue( this.return5())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win5} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss5} />
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
    updateWallet,
    updateProfit    
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Soros); 