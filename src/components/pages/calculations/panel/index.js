import React, { Component } from 'react';
import './styles.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    appLoading,
} from '../../../../store/actions'

class PanelController extends Component {
    state = {
        newWallet: 0,
        newProfit: 0,
        loading: false,
    }
    render() {
        const { newWallet, newProfit} = this.state;
        return(
            <div className="panel container">
                    <div className="col-sm-6">
                        <h5> Saldo disponível: R${ newWallet } </h5>

                        <h3>Informe o valor de sua ordem:</h3>
                        <input
                            type="number" 
                            min="1"
                            max={newWallet}
                            value={null}
                            onChange={null} />
                        <h4> Ordem: R${ null } </h4>
                    </div>
                    <div className="col-sm-6">
                        <h5> Lucro Bruto: R${ newProfit } </h5>

                        <h3>Informe o valor de sua ordem:</h3>
                        <input
                            type="number" 
                            min="1"
                            max={newWallet}
                            value={null}
                            onChange={null} />
                        <h4> Ordem: R${ null } </h4>
                    </div>
                    <div className="btn">
                        <button 
                            className="button-calculations"
                            onClick={this.updateState} > Calcular </button>
                    </div>
                    
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newName: state.ReducerUser.newName,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    appLoading
}, dispatch);
export default connect(mapStateToProps, 
    mapDispatchToProps
)(PanelController); 