import { LitElement, html } from 'lit-element'

class DomiTable extends LitElement {
    
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
            <div class="card">
                <span>aqui van los filtros....</span>
            </div>
            <div class="card">
                <h3>Consulta de domiciliaciones</h3>
                <table style="width:100%;" border="1">
                    <tr>
                        <th>Alias</th>
                        <th>Descripcion</th>
                        <th>Referencia</th>
                        <th>Dia de pago</th>
                        <th>Periodicidad (estatus)</th>
                        <th>Cantidad</th>
                        <th>Cuenta de cobro</th>
                    </tr>

                    ${this.domis.map((domi) => html`
                        <tr>
                            <th>${domi.serviceAlias}</th>
                            <th>${domi.description}</th>
                            <th>${domi.reference}</th>
                            <th>${domi.paymentDay}</th>
                            <th>${`${domi.periodicity} (${domi.IsPeriodic})`}</th>
                            <th>${domi.amount}</th>
                            <th>${domi.account}</th>
                        </tr>
                    `)}
                </table>
            </div>
        `
    }

}

customElements.define('domi-table', DomiTable)