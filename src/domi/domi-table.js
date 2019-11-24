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
            // domiTable: { type: String },
            selectOptions: { type: Array },
            domisTitle: { type: String },
            domisColumns: { type: Array },
            domis: { type: Array }
        }
    }

    constructor() {
        super()
        // this.domiTable = 'domi-table'
        this.selectOptions = [
            { id: 1, description: 'Alias' },
            { id: 2, description: 'Monto' }
        ]
        this.tableTitle = 'Domiciliaciones activas'
        this.domisColumns = [
            { id: 1, name: 'Alias' },
            { id: 2, name: 'Descripcion' },
            { id: 3, name: 'Referencia' },
            { id: 4, name: 'Dia de pago' },
            { id: 5, name: 'Periodicidad (estatus)' },
            { id: 6, name: 'Cantidad' },
            { id: 7, name: 'Cuenta de cobro' },
            { id: 8, name: 'Acciones' },
        ],
        this.domis = [
            { serviceAlias: 'cfe', description: 'pago luz casa', reference: '0901', paymentDay: '29/09', periodicity: 'mensual', amount:'1,000.00', account:'2341' },
            { serviceAlias: 'telefono mx', description: 'pago luz casa', reference: '0801', paymentDay: '10/09', periodicity: 'bimestral', amount:'670.00', account:'7741' },
            { serviceAlias: 'tdc amex', description: 'pago de despensa', reference: '0701', paymentDay: '5/09', periodicity: 'mensual', amount:'300.50', account:'6531' },
            // IsPeriodic: true, 
        ]
    }

    render() {
        return html`
            <!-- <h3>${this.domiTable} works!</h3> -->
            <div class="card inComplete">
                <filter-comp
                    .selectOptions=${this.selectOptions}
                >
                </filter-comp>
            </div>
            <div class="card inComplete">
                <table-comp
                    .tableTitle=${this.tableTitle} 
                    .nameColumns=${this.domisColumns}
                    .dataList=${this.domis}
                    >
                </table-comp>
            </div>
        `
    }

}

customElements.define('domi-table', DomiTable)