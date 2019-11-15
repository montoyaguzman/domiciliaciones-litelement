import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

class DomiTable extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            domiTable: { type: String },
            domis: { type: Array }
        }
    }

    constructor() {
        super()
        this.domiTable = 'domi-table'
        this.domis = [
            { serviceAlias: 'cfe', description: 'pago luz casa', reference: '0901', paymentDay: '29/09', IsPeriodic: true, periodicity: 'mensual', amount:'1,000.00', account:'2341' },
            { serviceAlias: 'telefono mx', description: 'pago luz casa', reference: '0801', paymentDay: '10/09', IsPeriodic: true, periodicity: 'bimestral', amount:'670.00', account:'7741' },
            { serviceAlias: 'tdc amex', description: 'pago de despensa', reference: '0701', paymentDay: '5/09', IsPeriodic: true, periodicity: 'mensual', amount:'300.50', account:'6531' }
        ]
    }

    render() {
        return html`
            <!-- <h3>${this.domiTable} works!</h3> -->
            <div class="card inComplete">
                <span>aqui van los filtros....</span>
            </div>
            <div class="card inComplete">
                <h3>Consulta de domiciliaciones</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Alias</th>
                            <th>Descripcion</th>
                            <th>Referencia</th>
                            <th>Dia de pago</th>
                            <th>Periodicidad (estatus)</th>
                            <th>Cantidad</th>
                            <th>Cuenta de cobro</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.domis.map((domi) => html`
                            <tr>
                                <th>${domi.serviceAlias}</th>
                                <th>${domi.description}</th>
                                <th>${domi.reference}</th>
                                <th>${domi.paymentDay}</th>
                                <th>${`${domi.periodicity} (${domi.IsPeriodic})`}</th>
                                <th>${domi.amount}</th>
                                <th>${domi.account}</th>
                                <th>
                                    <img 
                                        width="30px" 
                                        height="30px" 
                                        alt="editar" 
                                        src="../assets/img/edit.png">
                                    <img 
                                        width="30px" 
                                        height="30px" 
                                        alt="borrar"
                                        src="../assets/img/delete.png">
                                </th>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `
    }

}

customElements.define('domi-table', DomiTable)