import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

import '../components/filter-comp.js'
import '../components/table-comp.js'

class HistoricComp extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            // historicComp: { type: String }
            tableTile: { type: String },
            selectOptions: { type: Array },
            payments: { type: Array },
            paymentColumns: { type: Array },
            
        }
    }

    constructor() {
        super()
        // this.historicComp = 'historic-comp'
        this.tableTitle = 'Histórico de pagos'
        this.payments = [
            { alias: '1', alias: 'CFE casa', description: 'pago de la luz', cardNumber: '1234', reference: '0879', paymentDate: '12/11/2019', chargeDate: '13/11/2019', amount: '$100.00', periodicity: 'mensual', periodicityStatus: 'active', status: 'inactive', },
            { alias: '2', alias: 'telefono de mamá', description: 'telefono del pueblito', cardNumber: '1234', reference: '0809', paymentDate: '1/11/2019', chargeDate: '1/11/2019', amount: '$300.00', periodicity: 'mensual', periodicityStatus: 'active', status: 'active', }
        ],
        // IdPayment: '2', IdCard: '2', IdAgreement: '3', 

        this.selectOptions = [
            { id: 1, description: 'Alias' },
            { id: 2, description: 'Monto' }
        ]
        this.paymentColumns = [
            { id: 1, name: 'Alias' },
            { id: 2, name: 'Descripcion' },
            { id: 3, name: 'Tarjeta' },
            { id: 4, name: 'Referencia' },
            { id: 5, name: 'Pago' },
            { id: 6, name: 'Cargo' },
            { id: 7, name: 'C   antidad' },
            { id: 8, name: 'Periodicidad' },
            { id: 9, name: 'Estatus de periodicidad' },
            { id: 10, name: 'Estatus de domiciliacion' }
        ]
    }

    render() {
        return html`
            <!-- <h1>${this.historicComp} works!</h1> -->
            <div class="card inComplete">
                <filter-comp
                    .selectOptions=${this.selectOptions}
                >
                </filter-comp>
            </div>
            <div class="card inComplete">
                <table-comp
                    .tableTitle=${this.tableTitle} 
                    .nameColumns=${this.paymentColumns}
                    .dataList=${this.payments}
                    >
                </table-comp>
            </div>

        `
    }

}

customElements.define('historic-comp', HistoricComp)