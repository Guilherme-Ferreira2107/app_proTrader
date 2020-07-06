import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    updateWallet,
    updateProfit
} from '../../../../store/actions'

const percent15 = 0.1287;
const percent28 = 0.2767;
const percent57 = 0.5947;

class Martingale extends Component {
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
        let temp = (parseFloat(this.orderA())*(this.props.newPayout/100))+parseFloat(this.props.newOrder);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return2(){
        let temp = (parseFloat(this.orderA2())*(this.props.newPayout/100))+parseFloat(this.return());
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return3(){
        let temp = (parseFloat(this.orderA3())*(this.props.newPayout/100))+parseFloat(this.return2());
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return4(){
        let temp = (parseFloat(this.orderA4())*(this.props.newPayout/100))+parseFloat(this.return3());
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    return5(){
        let temp = (parseFloat(this.orderA5())*(this.props.newPayout/100))+parseFloat(this.return4());
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }   
    orderA(){
        let temp = parseFloat(this.props.newOrder) * parseFloat(percent15);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderA2(){
        let temp = parseFloat(this.return()) * parseFloat(percent15);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderA3(){
        let temp = parseFloat(this.return2()) * parseFloat(percent15);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderA4(){
        let temp = parseFloat(this.return3()) * parseFloat(percent15);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderA5(){
        let temp = parseFloat(this.return4()) * parseFloat(percent15);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderB(){
        let temp = parseFloat(this.props.newOrder) * parseFloat(percent28);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderB2(){
        let temp = parseFloat(this.return()) * parseFloat(percent28);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderB3(){
        let temp = parseFloat(this.return2()) * parseFloat(percent28);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderB4(){
        let temp = parseFloat(this.return3()) * parseFloat(percent28);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderB5(){
        let temp = parseFloat(this.return4()) * parseFloat(percent28);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderC(){
        let temp = parseFloat(this.props.newOrder) * parseFloat(percent57);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderC2(){
        let temp = parseFloat(this.return()) * parseFloat(percent57);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderC3(){
        let temp = parseFloat(this.return2()) * parseFloat(percent57);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderC4(){
        let temp = parseFloat(this.return3()) * parseFloat(percent57);
        var calc = parseFloat(temp.toFixed(2));
        return calc;
    }
    orderC5(){
        let temp = parseFloat(this.return4()) * parseFloat(percent57);
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
        const { updateWallet, updateProfit, newProfit, newWallet } = this.props;
        let inputValue = -this.return();
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
        let inputValue = -this.return2();
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
        let inputValue = -this.return3();
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
        let inputValue = -this.return4();
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
        let inputValue = -this.return5();
        await updateWallet({ inputValue, newWallet });
        await updateProfit({ inputValue, newProfit });
    }
    render() {
        return(
            <div className="martingale">
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td> </td>
                                <td className="tittle-table-row">
                                    <p>1° Ordem</p>
                                </td>
                                <td className="tittle-table-row">
                                    <p>1° Martingale</p>
                                </td>
                                <td className="tittle-table-row">
                                    <p>2° Martingale</p>
                                </td>
                                <td className="tittle-table-row">
                                    <p>Retorno</p>
                                </td>
                                <td className="result">
                                    <p>Resultado</p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="title-table-col">
                            <p>1° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderA() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderA())} />
                                </div>
                            </td>                                
                            <td>
                                <div className="field">
                                R$ { this.orderB() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderB() )} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderC() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderC() )} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.return() )} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss} />
                                </div></td>
                        </tr>
                        <tr>
                            <td className="title-table-col">
                            <p>2° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderA2() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderA2())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderB2() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderB2())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderC2() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderC2())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return2() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.return2())} />
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
                            <td className="title-table-col">
                            <p>3° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderA3() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderA3())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderB3() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderB3())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderC3() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderC3())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return3() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.return3())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win3} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss3} />
                                </div></td>
                        </tr>
                        <tr>
                            <td className="title-table-col">
                            <p>4° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderA4() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderA4())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderB4() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderB4())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderC4() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderc4())} />
                                </div>
                            </td>
                                <td>
                                <div className="field">
                                R$ { this.return4() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.return4())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                    <input className="button-win" value='Win' type='submit'
                                        onClick={this._Win4} />
                                    <input className="button-loss" value='Loss' type='submit'
                                        onClick={this._Loss4} />
                                </div></td>
                        </tr>
                        <tr>
                            <td className="title-table-col">
                                <p>5° Nível</p>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderA5() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderA5())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderB5() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderB5())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.orderC5() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.orderC5())} />
                                </div>
                            </td>
                            <td>
                                <div className="field">
                                R$ { this.return5() }
                                    <input
                                        value='Copy'
                                        type='submit'
                                        onClick={() => this.copyValue(this.return5())} />
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
)(Martingale); 